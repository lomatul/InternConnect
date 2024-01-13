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
                <div className="status">
                  <div className="notstart">
                  <td> Pending </td>
                  </div>
                </div>
                <td> Comapany3 </td>               
              </tr>

              <tr>
                <td> Lomatul Mahzabin </td>
                <td>200042113 </td>
                <div className="status">
                  <div className="pending">
                  <td> In Progress </td>
                  </div>
                </div>
                <td> Comapany1  </td>               
              </tr>

              <tr>
                <td> Lomatul Mahzabin </td>
                <td>200042113 </td>
                <div className="status">
                  <div className="hire">
                  <td> Hired </td>
                  </div>
                </div>
                <td>  Comapany2 </td>               
              </tr>

          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Status;
