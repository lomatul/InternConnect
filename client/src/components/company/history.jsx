import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Companyhistory = () => {

    const years=[  
        {value:2021, label:"2019"},
        {value:2022, label:"2022"},
        {value:2023, label:"2023"},
    ]
    

  return (
    <main className="table">
        <div className="form-group1">
        
          <Select className='adselect'  options={years}/>
         
        </div>

      <section className="table__header">
        <h1>Company Details </h1>

      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Title </th>
              <th> Address </th>
              <th> Email </th>
              <th> Contact Number </th>
              <th> Interns Hired </th>
            </tr>
          </thead>
          <tbody>
          
              <tr>
                <td>{"Name"}</td>
                <td>{"address"}</td>
                <td>{"email"}</td>
                <td>{"contactNumber"}</td>
                <td>{"internsHired"}</td>
              </tr>

          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Companyhistory;
