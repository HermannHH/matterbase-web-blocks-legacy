import React from 'react';
import Select from 'react-select';

function FormikSelect({
  options,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue },
}) {

  return (
    <div>
      <label htmlFor={field.name}>chi chi</label>
      <Select
        {...field}
        // {...props}
        options={options}
        value={(options ? options.find(option => option.value === field.value) : '')}
        onChange={option => setFieldValue(field.name, option.value)}
      />
      {touched[field.name] && errors[field.name] && (
        <p>{errors[field.name]}</p>
      )}
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
