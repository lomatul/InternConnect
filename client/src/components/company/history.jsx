import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Companyhistory = () => {

  const [selectedYear, setSelectedYear] = useState(null); // Default selected year
  const [historicalData, setHistoricalData] = useState([]);
  const [years, setYears] = useState([]);
    
  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get('http://localhost:4000/InterConnect/company/companies');
        const allCompanies = response.data;

        if (!allCompanies || allCompanies.length === 0) {
          console.log('No companies found.');
          return;
        }

        const uniqueYears = Array.from(
          new Set(allCompanies.flatMap(company => company.historicalData.map(entry => entry.year)))
        );

        const yearOptions = uniqueYears.map(year => ({ value: year, label: year.toString() }));

        setYears(yearOptions);
        setSelectedYear(yearOptions[0]?.value || null);
      } catch (error) {
        console.error('An error occurred while fetching companies:', error);
      }
    };

    fetchYears();
  }, []);


  useEffect(() => {
    if (!selectedYear) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/InterConnect/company/getHistoricalData/${selectedYear}`);
        setHistoricalData(response.data);
      } catch (error) {
        console.error('An error occurred while fetching historical data:', error);
      }
    };

    fetchData();
  }, [selectedYear]);


  return (
    <main className="table">
        <div className="form-group1">
        
          <Select className='adselect'  options={years}  value={years.find(yearOption => yearOption.value === selectedYear)}  onChange={(selectedOption) => setSelectedYear(selectedOption.value)}/>

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
          
              {historicalData.map((company, index) => (
              <tr key={index}>
                <td>{company.name}</td>
                <td>{company.address}</td>
                <td>{company.email}</td>
                <td>{company.contactNumber}</td>
                <td>{company.internsHired}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Companyhistory;
