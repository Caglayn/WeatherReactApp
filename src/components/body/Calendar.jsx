import React from 'react'

const Calendar = (props) => {
    const{selectedDate, setSelectedDate} = props;

    const handleCalendarChange = (event) => {
        setSelectedDate(event.target.value);
    }

  return (               
    <div className="card flex-fill">
        <div className="card-header">
            <h5 className="card-title mb-0">Select Date</h5>
        </div>
        <div className='card-body'>
            <input className={"form-control " + (selectedDate ? "is-valid" : "is-invalid")} type='datetime-local' onChange={handleCalendarChange} />
            {
                selectedDate ?
                <div className="valid-feedback">Looks Good!</div> : 
                <div className="invalid-feedback">Please provide a valid latitude</div>
            }
        </div>
    </div>
  )
}

export default Calendar