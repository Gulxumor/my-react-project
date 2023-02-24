import React from 'react';
import "../components/Calculator.css"

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "+",
            input1: null,
            input2: null,
            result: null
        }
    }


    setSelect = (e) => {
        this.setState({ select: e.target.value })
    }

    setInput1 = (e) => {
        this.setState({ input1: Number(e.target.value) })
    }

    setInput2 = (e) => {
        this.setState({ input2: Number(e.target.value) })
    }

    calculate = () => {
        let { select, input1, input2 } = this.state;
        this.setState({
            result: select === '+' ? input1 + input2
                : select === '-' ? input1 - input2
                    : select === '*' ? input1 * input2
                        : select === '/' ? input1 / input2 : 0
        });
    }

    reset = () => {
        this.setState({
            select: "",
            input1: "",
            input2: "",
            result: 0
        });
    }

    render() {
        return (
            <div className='div'>
                    <h2>Calculator</h2>
                <div className='container'>
                    <input className='input' type="number" value={this.state.input1} onChange={this.setInput1} placeholder='Enter number' />
                    <select value={this.state.select} onChange={this.setSelect} defaultValue="+">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <input className='input' type="number" value={this.state.input2} onChange={this.setInput2} placeholder='Enter number' />
                    <button onClick={this.calculate}>=</button>
                    <button onClick={this.reset}>Reset</button>
                    <p>Answer is: {this.state.result}</p>
                </div>
            </div>
        );
    }
}

export default Calculator;