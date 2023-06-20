import './App.css';
import {useState, useEffect} from 'react';
import countryService from './services/countries';
import Countries from './components/Countries.js';
import Info from './components/Info';

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [oneCountry, setOneCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    countryService.getAll().then(countries => {
      setCountries(countries.map(country => country.name.common));
      setIsLoading(false);
    })
  }
    , [])

  const filterCountry = (event) => {
    const word = event.target.value;
    setIsLoading(true);
    if (countries !== null && word !== ""){
      const filtered = countries.filter(country => country.toLowerCase().trim().startsWith(word.toLowerCase().trim()));
      setFilteredCountries(filtered);
      if (filtered && filtered.length === 1){
        setOneCountry(filtered);
      }
      else {
        setOneCountry(null);
      }
    }
    else {
      setFilteredCountries(null);
      setOneCountry(null);
    }
    setIsLoading(false);
  }

  if(isLoading) {
    return <div>loading...</div>
  }

  return (
    <div>
      <label>find countries </label>
      <input type="search" onChange={filterCountry}/>
      {!oneCountry ? <Countries filteredCountries={filteredCountries}/> : <Info country={oneCountry}/>}
    </div>
  );
}

export default App;
