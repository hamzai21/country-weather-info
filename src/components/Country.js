import {useState} from 'react';
import Info from '../components/Info';

const Country = ({country}) => {
    
    const [showInfo, setShowInfo] = useState(false);

    const toggleShowInfo = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div>
            <label key={country}>{country} </label> 
            <button onClick={toggleShowInfo}>show</button>
            {showInfo && <Info country={country}/>}
        </div>
    )
}

export default Country;