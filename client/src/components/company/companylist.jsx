import React from 'react';

const companylist = () => {
  return (
    <main className="table">
      <section className="table__header">
        <h1>Company Details </h1>
        <div className="input-group">
          <input type="search" placeholder="Search Data..." />
          <img src="search.png" alt="" />
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Title </th>
              <th> Address </th>
              <th> Email </th>
              <th> Contact Number </th>
              <th> Max Interns </th>
              <th> Min Interns </th>
              <th> Interns Hired </th>
              <th> Selected Interns </th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>BrainStation23</td>
                <td>123 Main St, City</td>
                <td>BrainStation23@email.com</td>
                <td>(123) 456-7890</td>
                <td>5</td>
                <td>2</td>
                <td>3</td>
                <td>John, Sarah, Emma</td>
              </tr>
              <tr>
                <td>StremTech</td>
                <td>456 Elm St, Town</td>
                <td>StremTech@email.com</td>
                <td>(234) 567-8901</td>
                <td>8</td>
                <td>3</td>
                <td>5</td>
                <td>Michael, Olivia, Liam, Ava, Ethan</td>
              </tr>
             
            </tbody>
          </table>
      </section>
    </main>
  );
};

export default companylist;
