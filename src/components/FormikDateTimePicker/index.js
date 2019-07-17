import React from 'react';
// import {} from 'react-'

// import Datetime from 'react-datetime';
import DatePicker from "react-datepicker";
import moment from 'moment-timezone';

import "react-datepicker/dist/react-datepicker.css";


export default function FormikDateTimePicker({
  value,
  onChange,
  onBlur,
  errors,
  touched,
  name,
  label,
  placeholder,
  timezone

}) {

  function handleChange(selected) {
    const timezoneSelected = moment(selected);
    onChange(name, timezoneSelected);
  };
  return (
    <div className="formik-date-time-picker">
        <label htmlFor={name} >{label}</label>
      {/* <Datetime
        // input={false}
        // defaultValue = {new Date()} 
        onSelect={(val) => console.log('toetsies', val)}
        // // onChange={(val) => console.log(val)}
        // onBlur={() => onBlur(name, true)}
        // placeholder={placeholder}
      /> */}
      <DatePicker
        // selected={new Date()}
        selected={value}
        onChange={(val) => handleChange(val)}
        onBlur={() => onBlur(name, true)}
        // minDate={new Date(startTime.format('YYYY-MM-DD HH:mm'))}
        showTimeSelect
        // dateFormat="Pp"
        timeIntervals={15}
        // timeFormat="p"
        dateFormat="DD MMM, YYYY hh:mm A"
        placeholderText={placeholder}
      />
    </div>
  )
};

