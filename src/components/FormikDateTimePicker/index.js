import React from 'react';
// import {} from 'react-'

// import Datetime from 'react-datetime';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function FormikDateTimePicker({
  value,
  onChange,
  onBlur,
  errors,
  touched,
  name,
  label,
  placeholder

}) {
  return (
    <div className="formik-date-time-picker">
      {/* <Datetime
        // input={false}
        // defaultValue = {new Date()} 
        onSelect={(val) => console.log('toetsies', val)}
        // // onChange={(val) => console.log(val)}
        // onBlur={() => onBlur(name, true)}
        // placeholder={placeholder}
      /> */}
      <DatePicker
        selected={new Date()}
        onChange={(val) => console.log(val)}
        showTimeSelect
        dateFormat="Pp"
        timeIntervals={15}
        timeFormat="p"
      />
    </div>
  )
};

