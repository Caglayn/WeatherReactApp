import React, { useEffect, useState } from 'react'
import Calendar from '../body/Calendar'
import CheckBoxCard from '../body/CheckBoxCard';
import { getDailySummary, getHourlyVars } from '../../api/WeatherService';
import LocationSelector from '../body/LocationSelector';
import SummaryCard from '../body/SummaryCard';
import SpinnerButton from '../buttons/SpinnerButton';

const Content = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [elements, setElements] = useState([]);
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [isUpdateButtonVisible, setIsUpdateButtonVisible] = useState(false);
    const [summaryList, setSummaryList] = useState([]);
    const [apiProgress, setApiProgress] = useState(false);

    /*useEffect(()=>{
        getHourlyVars().then(response => {
            setElements(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, []);*/

    useEffect(()=>{
        setIsUpdateButtonVisible(selectedDate && latitude && longitude);
    }, [latitude, longitude, selectedDate]);

    const handleOnClickUpdate = () => {
        setApiProgress(true);
        getDailySummary(latitude, longitude, selectedDate.split('T')[0])
        .then(response => {
            setSummaryList(response.data);
            setIsUpdateButtonVisible(false);
            setApiProgress(false);
        })
        .catch(err => {
            console.error(err);
            setApiProgress(false);
        });
    }

  return (
    <div>
        <main className="content">
            <div className="container-fluid p-0">
                <h1 className="h3 mb-3">Weather Page</h1>
                <div className='row'>
                    {
                        summaryList.map(i => 
                            <SummaryCard key={i.name} title={i.name} icon={i.icon} value={i.val} description={i.explanation} unit={i.unit}/>
                            )
                    }
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    </div>
                    <div className="col-xl-6 col-xxl-6">
                        <LocationSelector setLatitude={setLatitude} setLongitude={setLongitude} />
                    </div>
                </div>
                <div className={"row " + (!isUpdateButtonVisible && " invisible")}>
                    <div className='col-sm-3'>

                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Update Daily Summary</h5>
                                <h6 className="card-subtitle text-muted">Select latitude, longitude and date first.</h6>
                            </div>
                            <div className="card-body text-center">
                                <div className="mb-3">
                                    <SpinnerButton handleOnClick={handleOnClickUpdate} loading={apiProgress} text={"Update"} />
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Content