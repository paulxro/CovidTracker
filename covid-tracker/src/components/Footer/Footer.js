import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className = "footer-main">
            <div>
                <b>This application was created for the IB Computer Science Internal Assessment</b>
            </div>
            <div>
                <h5>Map created using <a href="https://react-leaflet.js.org/" target = "_blank" rel="noreferrer">react-leaflet</a></h5>
                <h5>Country data retrieved from <a href="https://datahub.io/core/geo-countries" target = "_blank" rel="noreferrer">Geo-countries</a></h5>
                <h5>Covid-19 data retrieved from "COVID-19 Data Repository by the Center for Systems Science and Engineering (CSSE) at Johns Hopkins University" <a href="https://github.com/CSSEGISandData/COVID-19" target = "_blank" rel="noreferrer">Covid Live Data</a></h5>
            </div>
            <h6>Copyright @ Paul Aldea 2021</h6>
        </div>
        
      );
}
 
export default Footer;