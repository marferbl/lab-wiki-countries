import { Link } from 'react-router-dom'
import countries from '../countries.json';

const CountryDetails = props => {

let copyCountries = [...countries]   
const cc3 = props.match.params.id;
copyCountries = copyCountries.filter((elem) => {
            return elem.cca3 == cc3;
             })
const nameCountry = copyCountries[0].name.common;
const areaCountry = copyCountries[0].area;
const borders =[...copyCountries[0].borders]

console.log(copyCountries[0]);

    return (
      <>
        <div className="detailsDiv">
          <h1>{nameCountry}</h1>
          <span>Capital: {copyCountries[0].capital[0]}</span>
          <hr></hr>
          <span>Area: {areaCountry}</span>
          <hr></hr>
          {borders.length > 0 ? <span>Frontera con: </span> : <span>No tiene fronteras </span>}
          <ul>
            {borders.map((border) => (
              <li className= "listComponent">
                <Link to={`/country/${border}`}>{border}</Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default CountryDetails