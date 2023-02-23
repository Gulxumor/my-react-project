import './App.css';

import React from 'react';
class DollarTransfer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usDollars:null,
      uzbekSum:null,
    }
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const uzbekSum = value * 8400;

    this.setState({
      usDollars: value,
      uzbekSum,
    });
  }

  render() {
    const { usDollars, uzbekSum } = this.state;
    return (
      <div className='valyuta'>
        <label>
          US Dollars:
          <input type="number" value={usDollars} onChange={this.handleInputChange} />
        </label>
        <p>Uzbek Sum: {uzbekSum}</p>
      </div>
    )
  }
}
export default DollarTransfer