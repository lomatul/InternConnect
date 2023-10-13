import React from 'react';

const companylist = () => {
  return (
    <main className="table">
      <section className="table__header">
        <h1>Customer's Orders</h1>
        <div className="input-group">
          <input type="search" placeholder="Search Data..." />
          <img src="images/search.png" alt="" />
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th> Id <span className="icon-arrow">&UpArrow;</span></th>
              <th> Customer <span className="icon-arrow">&UpArrow;</span></th>
              <th> Location <span className="icon-arrow">&UpArrow;</span></th>
              <th> Order Date <span className="icon-arrow">&UpArrow;</span></th>
              <th> Status <span className="icon-arrow">&UpArrow;</span></th>
              <th> Amount <span className="icon-arrow">&UpArrow;</span></th>
            </tr>
          </thead>
          <tbody>
            {/* Rows will go here */}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default companylist;
