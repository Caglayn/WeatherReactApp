import React, { useEffect, useState } from 'react';
import Calendar from '../body/Calendar';
import LocationSelector from '../body/LocationSelector';
import SpinnerButton from '../buttons/SpinnerButton';
import ListWithIconCard from '../cards/ListWithIconCard';
import { getHourlyDataByParam, getHourlyVars } from '../../api/WeatherService';
import SelectBoxCard from '../cards/SelectBoxCard';
import LineChartCard from '../cards/LineChartCard';

const HourlyContent = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [isLocationParamsValid, setIsLocationParamsValid] = useState(false);
    const [apiProgress, setApiProgress] = useState(false);
    const [headers, setHeaders] = useState([]);
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [listVisible, setListVisible] = useState(false);
    const [optionList, setOptionList] = useState([]);

    useEffect(()=>{
        setIsLocationParamsValid(selectedDate && latitude && longitude);
    }, [latitude, longitude, selectedDate]);

    useEffect(()=> {
        getHourlyVars().then(response => {
            setOptionList(response.data);
        }).catch(error => {
            console.error(error);
        })
    },[])

    const handleOnChangeComboBox = (selectedOption) => {
        if(isLocationParamsValid && selectedOption && selectedOption != '-1'){
            getHourlyDataByParam(latitude, longitude, selectedDate.split('T')[0], selectedOption)
            .then(response => {
                setTitle(response.data[0].name);
                setDescription(response.data[0].explanation);
                setHeaders(['Name','Value','Unit','Time']);
                setContent(response.data);
                setListVisible(true);
            }).catch(err => {
                setListVisible(false);
                console.log(err);
            })
        }
    }

  return (
    <div>
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Hourly Weather Page</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    </div>
                    <div className="col-xl-6 col-xxl-6">
                        <LocationSelector setLatitude={setLatitude} setLongitude={setLongitude} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-12 col-xxl-12'>
                        <SelectBoxCard optionList={optionList} onChange={handleOnChangeComboBox} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-6 col-xxl-6'>
                        {listVisible && <LineChartCard list={content} />}
                    </div>
                    <div className={'col-xl-6 col-xxl-6' + (!listVisible&&' invisible')}>
                        <ListWithIconCard headers={headers} content={content} title={title} description={description} />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default HourlyContent