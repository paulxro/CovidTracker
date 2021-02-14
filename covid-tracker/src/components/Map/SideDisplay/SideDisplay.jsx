import React, {useState} from 'react';
import './SideDisplay.css';

// sideDisplay class is declared with one parameter, and multiple instance variable / methods
// used for the map side display to display country data

const SideDisplay = ({country}) => {

    // instance variables (currentCountry, menuVisibility)
    const [currentCountry, setCountry] = useState(country);
    const [menuVisibility, setMenuVisibility] = useState(true);

    // methods (handleClick, numberWithCommas)
    
    const handleClick = () => {
        setCountry(country);
        setMenuVisibility(!menuVisibility);
    }

    if(country !== null && !menuVisibility && currentCountry !== country){
        setMenuVisibility(!menuVisibility);
    }

    function numberWithCommas(x) {
        try{
            x = x.toString();
        } catch {
            return x;
        }
        
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1, $2");
        return x;
    }

    //html code below


    
    return ( 
        <div className>
            <div className = {menuVisibility ? "sideDisplay-main active" : "sideDisplay-main"}>
                <div>
                    <h1>Country Info</h1>
                    {!country.properties.deaths ? (
                        <h1>WARNING: Information about this region is limited, and may be partially or entirely incorrect.</h1>
                    ) : (
                        <div></div>
                    )}
                    <h2>Country Name: {country.properties.ADMIN}</h2>
                    <h2>Country Code: {country.properties.ISO_A3}</h2>
                    <h2>Country Confirmed Cases: {numberWithCommas(country.properties.confirmed)}</h2>
                    <h2>Country Deaths: {numberWithCommas(country.properties.deaths)}</h2>
                    <h2>Country Recovered: {numberWithCommas(country.properties.recovered)}</h2>
                </div>
                <div className = "sideDisplay-toggle">
                    <div>
                        <i className = {menuVisibility ? "fas fa-times active" : "fas fa-times"}  onClick={handleClick}></i>
                    </div>
                </div>
            </div>
            
        </div>

        
     );
}
 
export default SideDisplay;