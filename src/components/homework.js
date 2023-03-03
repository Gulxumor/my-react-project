import React, { Component } from 'react';
import './Countries.css';
import { countries } from './Countries-data'

class FindState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryName: countries.name,
            country: "",
            flag: '',
            subregion: "",
            capital: '',
            population: '',
            currency: '',
            language: '',
            foundCountry: false,
        }
    }

    InputChange = (event) => {
        this.setState({ countryName: event.target.value });
    }

    searchCountry = () => {
        const { countryName } = this.state;
        const foundCountry = countries.find(country => country.name.common.toLowerCase() === countryName.toLowerCase());

        if (foundCountry) {
            this.setState({
                country: foundCountry.name.common,
                flag: foundCountry.flags.png,
                capital: foundCountry.capital,
                subregion: foundCountry.subregion,
                population: foundCountry.population,
                currency: foundCountry.currencies.name,
                language: foundCountry.nativeName,
                foundCountry: true
            });
        } else {
            this.setState({
                country: "",
                flag: '',
                capital: '',
                subregion: "",
                population: '',
                currency: '',
                language: '',
                foundCountry: false
            });
        }
    }

    render() {
        const { countryName, country, flag, capital, subregion, population, currency, language, foundCountry } = this.state;
        return (
            <div className="FindState">
                    <form>
                        <input
                            type="text"
                            placeholder="Enter Country Name"
                            value={countryName}
                            onChange={this.InputChange}
                        />
                        <button onClick={this.searchCountry}>Search</button>
                    </form>
                    {foundCountry ? (
                        <div className="find-country">
                            <img src={flag} alt="flag" />
                            <p><b>Country: </b>{country}</p>
                            <p><b>Capital: </b>{capital}</p>
                            <p><b>Location: </b>{subregion}</p>
                            <p><b>Population: </b>{population}</p>
                            <p><b>Currency: </b>{currency}</p>
                            <p><b>Language: </b>{language}</p>
                        </div>
                    ) : (
                        <pre></pre>
                    )}
            </div>
        );
    }
}

export default FindState
