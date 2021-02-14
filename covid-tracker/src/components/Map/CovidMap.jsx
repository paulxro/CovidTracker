import React, { useState } from 'react';
import {MapContainer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CovidMap.css';
import SideDisplay from './SideDisplay/SideDisplay';

const CovidMap = ({ countries }) => {

    const [currentCountry, setCurrentCountry] = useState(null);

    // import react-leaflet above

    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    // built-in function allowing for user interaction of each country "feature" on the map

    const onEachCountry = (country, layer) => {
        layer.options.fillColor = country.properties.color;
        //layer.bindPopup(`${name} ${confirmedText}`);
        layer.on('click', function () {
            setCurrentCountry(country);
            layer.options.fillColor = country.properties.hoverColor;
        });
    };

    // implementation of map in html to create interactive map

    return (
        <div>
            <MapContainer style={{height: "85vh"}} zoom = {3} center = {[50, 10]}>
                <GeoJSON 
                    style={mapStyle} 
                    data={countries} 
                    onEachFeature={onEachCountry}
                />
            </MapContainer>
            {currentCountry !== null ? (
                <SideDisplay 
                    country = {currentCountry}
                />
            ) : (
                <div></div>
            )}
            
        </div>

    );
}
 
export default CovidMap;