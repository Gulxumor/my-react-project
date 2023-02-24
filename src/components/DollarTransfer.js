import './DollarTransfer.css';
import React from 'react';

class DollarTransfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      US_Dollars: "",
      Uzbek_Soums: 0
    };

    //Bind methods to constructor so they have access to "this" keyword
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrencyTransfer = this.handleCurrencyTransfer.bind(this);
  }

  //Handle change in input field, update state with value in input field
  handleInputChange(event) {
    this.setState({ US_Dollars: event.target.value });
  }

  //Handles conversion and displays converted amount
  //transfer bosilganda yuradi
  handleCurrencyTransfer() {
    let US_Dollars = this.state.US_Dollars;
    let Uzbek_Soums = US_Dollars * 11450;
    this.setState({ Uzbek_Soums });
  }

  render() {
    return (
      <div className='val-container'>
        <div className='valyuta'>
        <h2>DollarToSum</h2>

          <label>Dollarni kiriting:
            <input type="number" value={this.state.US_Dollars} onChange={this.handleInputChange} />
          </label>
          <p>Bir US dollar O'zbek so'mida 1145000 so'm ga teng </p>
          <button onClick={this.handleCurrencyTransfer}>Transfer</button>

          {/* Bu qism faqat button bosilgandagina korinadi */}
          {this.state.Uzbek_Soums > false ? <p>Siz kiritgan {this.state.US_Dollars} dollar O'zbek summasida {this.state.Uzbek_Soums} so'm ga teng !</p> : ""}

        </div>
      </div>
    );
  }
}
export default DollarTransfer;










// 2-usul

// class DollarTransfer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usdInput: '',
//       soumConversion: 0,
//       hasConverted: false
//     };

//     this.handleChangeUSDInput = this.handleChangeUSDInput.bind(this);
//     this.handleTransferButton = this.handleTransferButton.bind(this);
//   }

//   handleChangeUSDInput(event) {
//     this.setState({ usdInput: event.target.value });
//   }

//   handleTransferButton() {
//     // convert USD to soum at a rate of 1145000 soum / 1 USD
//     let soum = this.state.usdInput * 1145000;
//     this.setState({ soumConversion: soum, hasConverted: true });
//   }

//   render() {
//     return (
//       <div className='val-container'>
//         <h2>Dollarni kiriting</h2>
//         <input type="number" value={this.state.usdInput} onChange={this.handleChangeUSDInput} />
//         <button onClick={this.handleTransferButton}>Transfer</button>
//         {this.state.hasConverted ? <p>{this.state.soumConversion} soums</p> : ''}
//       </div>
//     );
//   }

// }

// export default DollarTransfer;