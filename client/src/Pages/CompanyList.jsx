import React from 'react';
import Table from '../components/companylist';
import '../components/company.css';
import '../components/script';

function companies() {
  return (
    <div className="companies">
      <Table />
      <Table />
      <Table />
      {/* Add more instances of Table component as needed */}
    </div>
  );
}

export default companies;
