import {useState, useEffect} from 'react';
import countryService from '../services/countries';
import Weather from '../components/Weather';

const Info = ({country}) => {
    const [countryInfo, setCountryInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        countryService
        .getCountry(country)
        .then(response => {
            setCountryInfo(response);
            setIsLoading(false);
        })
    }, [country]);

    if (isLoading){
        return <div>Loading...</div>
    }

    return (
        <div className="info">
            <h1>{countryInfo.name.common}</h1>
            <p>capital {countryInfo.capital}</p>
            <p>area {countryInfo.area}</p>

            <h3>languages:</h3>
            <ul>
                {Object.values(countryInfo.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={countryInfo.flags.png} alt={countryInfo.flags.alt}></img>
            <h3>Weather in {countryInfo.capital}</h3>
            <Weather country={countryInfo.capital}/>
        </div>
    )
}

export default Info;