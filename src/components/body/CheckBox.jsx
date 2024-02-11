import React from 'react'

const CheckBox = (props) => {
    const{text, isChecked, onChange} = props;

    const handleCheckboxChange = () => {
      onChange(text);
  };

  return (
    <label className="form-check">
        <input className="form-check-input" type="checkbox" onChange={handleCheckboxChange} checked={isChecked} value={text} />
        <span className="form-check-label">{text}</span>
    </label>
  )
}

export default CheckBox