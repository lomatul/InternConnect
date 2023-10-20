import React from 'react';
import Table from '../components/company/companylist';
import '../components/company/company.css';
import '../components/company/script';

function Companies() {
  return (
    <div className="companies">
      <Table />
      {/* Add more instances of Table component as needed */}
    </div>
  );
}

export default Companies;
