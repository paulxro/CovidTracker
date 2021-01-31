import React, { useState, useEffect } from 'react';
import './Database.css';
import LoadCountriesTask from '../../tasks/LoadCountriesTask';

const Database = () => {

    const [countries, setCountries] = useState([]);

    // Exact same thing as the map

    const load = () => {
        const loadCountriesTask = new LoadCountriesTask();
        loadCountriesTask.load(setCountries);
    };

    useEffect(load, []);

    const renderTable = (country, index) => {
        if (country.properties.confirmed !== 0){
            return (
                <tr key = {index}>
                    <td>{index}</td>
                    <td>{country.properties.ISO_A3}</td>
                    <td>{country.properties.ADMIN}</td>
                    <td>{country.properties.confirmed}</td>
                    <td>{country.properties.deaths}</td>
                    <td>{country.properties.recovered}</td>
                    <td>{country.properties.infectionRate}</td>
                </tr>
            )
        }

    };


    return ( 
        <div className = "database-main">
            
            <table className = "country-table">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Country Code</th>
                        <th>Country Name</th>
                        <th>Confirmed Cases</th>
                        <th>Total Deaths</th>
                        <th>Confirmed Recoveries</th>
                        <th>Infection rate</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map(renderTable)}
                </tbody>
            </table>
            <h5>Note: Only countries with complete data are included in the above table</h5>
        </div>
    );
}
 
export default Database;