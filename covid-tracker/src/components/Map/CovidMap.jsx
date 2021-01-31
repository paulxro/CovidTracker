import React, { useState } from 'react';
import {MapContainer, GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './CovidMap.css';
import SideDisplay from './SideDisplay/SideDisplay';

const CovidMap = ({ countries }) => {

    const [currentCountry, setCurrentCountry] = useState(null);

    const mapStyle = {
        fillColor: "white",
        weight: 1,
        color: "black",
        fillOpacity: 1,
    };

    const onEachCountry = (country, layer) => {
        layer.options.fillColor = country.properties.color;
        //layer.bindPopup(`${name} ${confirmedText}`);
        layer.on('click', function () {
            setCurrentCountry(country);
            layer.options.fillColor = country.properties.hoverColor;
        });
    };

    return (
        <div>
            <MapContainer style={{height: "85vh"}} zoom = {2} center = {[20, 100]}>
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