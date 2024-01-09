import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Status = () => {


  return (
    <main className="table">
       

      <section className="table__header">
        <h1> Student Status </h1>

      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th> Id </th>
              <th> Status </th>
              <th> Company Name </th>
              
            </tr>
          </thead>
          <tbody>
          
              <tr>
                <td> Lomatul Mahzabin </td>
                <td>200042113 </td>
                <td> Pending </td>
                <td>  </td>               
              </tr>

              <tr>
                <td> Lomatul Mahzabin </td>
                <td>200042113 </td>
                <td> In Progress </td>
                <td> Comapany1  </td>               
              </tr>

              <tr>
                <td> Lomatul Mahzabin </td>
                <td>200042113 </td>
                <td> Hired </td>
                <td>  Comapany2 </td>               
              </tr>

          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Status;
