import {features} from '../data/countries.json';
import papa from "papaparse";
import legendItems from '../entities/LegendItems';

class LoadCountriesTask{
    dataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv';
    
    setState = null;
    mapCountries = features;
    
    load = (setState) => {
        this.setState = setState;
        papa.parse(this.dataUrl, {
            download: true,
            header: true,
            complete: (result) => this.#processCovidData(result.data),
        });
    };

    #processCovidData = (covidCountries) => {
        for(let i = 0; i < this.mapCountries.length; i++){
            const mapCountry = this.mapCountries[i];
            const covidCountry = covidCountries.find(
                (covidCountry) => covidCountry.ISO3 === mapCountry.properties.ISO_A3
            );
            mapCountry.properties.confirmed = 0;
            mapCountry.properties.confirmedText = "0";

            

            if(covidCountry != null && covidCountry.Confirmed !== 0){
                const confirmed = Number(covidCountry.Confirmed);
                const deaths = Number(covidCountry.Deaths);
                const recovered = Number(covidCountry.Recovered);
                const infectionRate = Math.floor(parseFloat(covidCountry.Incident_Rate));
                mapCountry.properties.confirmed = confirmed;
                mapCountry.properties.deaths = deaths;
                mapCountry.properties.recovered = recovered;
                mapCountry.properties.confirmedText = this.#formatNumberWithCommas(confirmed);
                mapCountry.properties.infectionRate = infectionRate;
            }

            this.#setCountryColor(mapCountry);
        }


        this.setState(this.mapCountries);
    };

    #setCountryColor = (mapCountry) => {
        const legendItem = legendItems.find((legendItem) => 
            legendItem.isFor(mapCountry.properties.confirmed)
        );

        if(legendItem != null){
            mapCountry.properties.color = legendItem.color;
            // const currentCountryHSV = convert.hex.hsv(mapCountry.properties.color);
            // mapCountry.properties.hoverColor = convert.hsv.hex(currentCountryHSV[0], currentCountryHSV[1], currentCountryHSV[2] -= 20)
            mapCountry.properties.hoverColor = "#fffff";
        }
    };

    #formatNumberWithCommas = function (number)  {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

export default LoadCountriesTask;