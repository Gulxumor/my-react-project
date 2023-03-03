// import React from 'react';
// import { countries } from "./components/Countries-data.js"
// import "./components/Countries.css"

// class Countries extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: countries,
//             flag: "",
//             capital: "",
//             population: null,
//             currency: null,
//             language: ""
//         };
//     }

//     render() {

//         let Search = (name) => {
//             let res = this.state.name.filter((value) => value.name.toLowerCase() !== name.toLowerCase());
//             this.setState({ name: res});
//             console.log(this.state.name);
//         }

//         return (
//             <div>
//                 <input type="text" value={"country"} onChange={OnSearch} placeholder='Enter a country name here' />
//                 <button onClick={() => Search(name)}>Search</button>

//                 <p>Flag:<img src={this.state.flag} alt="" /></p>
//                 <p>Capital: {this.state.capital}</p>
//                 <p>Population: {this.state.population}</p>
//                 <p>Currency: {this.state.currency}</p>
//                 <p>Language: {this.state.language}</p>
//             </div>
//         );
//     }
// }


// export default Countries;
