import React, { useState } from 'react';
import CheckBox from './CheckBox';

const CheckBoxCard = (props) => {
    const{title, elements} = props;
    const [checkedCheckboxes, setCheckedCheckboxes] = useState([]);

    const handleCheckboxChange = (value) => {
        if (checkedCheckboxes.includes(value)) {
            setCheckedCheckboxes(checkedCheckboxes.filter(item => item !== value));
        } else {
            setCheckedCheckboxes([...checkedCheckboxes, value]);
        }
    };


  return (
    <div className="card" style={{maxHeight: '300px', overflow: 'hidden'}}>
        <div className="card-header">
            <h5 className="card-title mb-0">{title}</h5>
        </div>
        <div className="card-body" style={{overflowY: 'auto'}}>
            {
                elements.map(i => <CheckBox key={i} text={i} isChecked={checkedCheckboxes.includes(i)} onChange={handleCheckboxChange} />)
            }
        </div>
    </div>
  )
}

export default CheckBoxCard