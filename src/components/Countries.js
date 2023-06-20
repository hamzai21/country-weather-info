import Country from '../components/Country';

const Countries = ({filteredCountries}) => {

    if (filteredCountries !== null && filteredCountries.length > 10) 
    {
        return <p>Too many matches, specify another filter</p>
    }

    return (
        <div>
            {filteredCountries !== null ? filteredCountries.map(country => <Country key={country} country={country}/>) : <p> </p>}
        </div>
    )
}

export default Countries;