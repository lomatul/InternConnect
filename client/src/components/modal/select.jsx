import React, { useEffect } from 'react';
import Select from 'react-select';

const Dropdown = () => {
const options=[
  {value:"All",label:"all"},
  {value:"Individual", label:"Individual"},
]

  return (
    <div  style={{width:'200px', option: (base) => ({
      ...base,
      border: `1px dotted `,
      height: '100%',
    }),} }>
      <Select options={options}/>
  </div>
  );
};

export default Dropdown;
