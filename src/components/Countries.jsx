import React from "react";
import { countries } from "./Countries-data";
import "../components/Countries.css";
export default class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      inp: null,
      nul: {},
    };
  }
  render() {
    let onInputChange = (e) => {
      this.setState({ inp: e.target.value});
    };

    let inc = () => {
      let res = countries.filter(
        (e) => e.name.common.toLowerCase() === this.state.inp.toLowerCase()
      );
      if (res.length < 1) {
        let res2 = {
          id: this.state.arr.length + 1,
          name: "Bunday davlat mavjud emas",
        };
        this.setState({ ...this.state, nul: res2, arr: [] });
      } else this.setState({ ...this.state, arr: res, nul: null });
    };
    return (
      <div className="container">
        <div className="wrapper">
          <input
            type="text"
            onChange={onInputChange}
            placeholder="Enter a country name"
          ></input>
          <button onClick={inc}>Search</button>
        </div>
        {this.state.nul ? <h4 className="h4">{this.state.nul.name}</h4> : ""}
        {this.state.arr.map((country) => (
          <div key={country.name.common} className="main">
            <div className="img">
              <img src={country.flags.png} alt="flag-png"></img>
              <h4>State: {country.name.common}</h4>
            </div>
            <h4>Capital: {country.capital[0]}</h4>
            <h4>Population: {country.population}</h4>
            <h4>Location: {country.continents[0]}</h4>
          </div>
        ))}
      </div>
    );
  }
}
