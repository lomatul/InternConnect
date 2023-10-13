import React from 'react';
import Table from '../components/company/companylist';
import '../components/company/company.css';
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
