import React from 'react';
import Select from 'react-select';

function FormikSelect({
  value,
  onChange,
  onBlur,
  errors,
  touched,
  options,
  name,
  label,
  placeholder
}) {
  const hasError = errors[name] && touched[name];
  return (
    <div style={{ margin: '1rem 0' }}>
        <label htmlFor={name} >{label}</label>
        <Select
          id={name}
          name={name}
          styles={{
              control: (provided) => ((hasError) ? {
                  ...provided, borderColor: '#dc3545', 
              } : provided)
          }}
          options={options}
          multi={true}
          onChange={(value) => onChange(name, value)}
          onBlur={() => onBlur(name, true)}
          value={value}
          placeholder={placeholder}
        />
        {hasError &&
          <div style={{
            width: "100%",
            marginTop: "0.25rem",
            fontSize: "80%",
            color: "#dc3545",
          }}>{errors[name]}</div>
        } 
      </div>
  )
};

export default FormikSelect;


// class MySelect extends React.Component {
//   handleChange = value => {
//     // this is going to call setFieldValue and manually update values.topcis
//     this.props.onChange('topics', value);
//   };

//   handleBlur = () => {
//     // this is going to call setFieldTouched and manually update touched.topcis
//     this.props.onBlur('topics', true);
//   };

//   render() {
//     return (
//       <div style={{ margin: '1rem 0' }}>
//         <label htmlFor="color">Topics (select at least 3) </label>
//         <Select
//           id="color"
//           options={options}
//           multi={true}
//           onChange={this.handleChange}
//           onBlur={this.handleBlur}
//           value={this.props.value}
//         />
//         {!!this.props.error &&
//           this.props.touched && (
//             <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
//           )}
//       </div>
//     );
//   }
// }
