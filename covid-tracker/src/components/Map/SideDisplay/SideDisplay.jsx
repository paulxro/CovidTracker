import React, {useState} from 'react';
import './SideDisplay.css';

const SideDisplay = ({country}) => {

    const [menuVisibility, setMenuVisibility] = useState(true);

    const handleClick = () => {
        setMenuVisibility(!menuVisibility);
    }

    return ( 
        <div>
            <div className = "sideDisplay-main">
                
                {menuVisibility ? (
                    <div>
                        <h1>Country Info</h1>
                        {!country.properties.deaths ? (
                            <h1>WARNING: Information about this region is limited, and may be partially or entirely incorrect.</h1>
                        ) : (
                            <div></div>
                        )}
                        <h2>Country Name: {country.properties.ADMIN}</h2>
                        <h2>Country ISO_A3: {country.properties.ISO_A3}</h2>
                        <h2>Country Confirmed Cases: {country.properties.confirmed}</h2>
                        <h2>Country Deaths: {country.properties.deaths}</h2>
                        <h2>Country Recovered: {country.properties.recovered}</h2>
                    </div>
                    
                ) : (
                    <div></div>
                )}
                <div className = "sideDisplay-toggle">
                    <div onClick={handleClick}>
                        <h2>Display more info</h2>
                        <i className = {menuVisibility ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </div>
            
        </div>

        
     );
}
 
export default SideDisplay;