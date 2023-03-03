/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { countries } from './Countries-data'
import "../components/Countries.css"

// flags -bayroq population-aholisi continents-qtasi
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
            this.setState({ inp: e.target.value });
        };

        let inc = () => {
            let res = countries.filter((v) =>  v.name.common.toLocaleLowerCase() === this.state.inp.toLocaleLowerCase());
            if (res.length < 1) {
                let res2 = { id: this.state.arr.length + 1, name: 'Bunday davlat mavjud emas' }
                this.setState({ ...this.state, nul: res2, arr: [] })
            }
            else this.setState({ ...this.state, arr: res, nul: null });
        };
        return (
            <div className="nav">
                <div className="inp">
                    <input type="text" onChange={onInputChange} placeholder="Enter a country name"></input>
                    <button onClick={inc}>Search</button>
                </div>
                {this.state.nul ? <h4 className="h4">{this.state.nul.name}</h4> : ""}
                {this.state.arr.map((v) => (
                    <div key={v.name.common} className="main">
                        <div className="img">
                            <img src={v.flags.png} alt="flag-png"></img>
                            <h4>State: {v.name.common}</h4>
                        </div>
                        <h4>Capital: {v.capital[0]}</h4>
                        <h4>Population: {v.population}</h4>
                        <h4>Continents: {v.continents[0]}</h4>
                    </div>
                ))}
            </div>
        );
    }
}
