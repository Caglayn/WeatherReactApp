import React from 'react'

const SelectBoxCard = (props) => {
    const{optionList, onChange} = props;

  return (
     <div className="card">
        <div className="card-header">
            <h5 className="card-title mb-0">Select a Parameter</h5>
        </div>
        <div className="card-body">
            <select className="form-select mb-3" onChange={event => onChange(event.target.value)}>
                <option defaultValue={true} value={'-1'}>Select a Value</option>
                {
                    optionList.map(i => <option key={i} id={i} value={i}>{i.replaceAll('_', ' ')}</option> )
                }
            </select>
		</div>
	</div>
  )
}

export default SelectBoxCard