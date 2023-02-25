import React from "react";
import "../components/Age.css"

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // year: "",
            yosh: 0
        }
    }
    render() {
        const onYearChange = (e) => {
            this.setState({ year: Number(e.target.value) })
        }

        const transfer = () => {
            this.setState({ yosh: 2023 - this.state.year })
        }

        return (
            <div className="age">
                <h2>Age controller</h2>
                <div className="year">
                    <input type='number' onChange={onYearChange} placeholder="Input your birth year" />
                    <button onClick={transfer}>Transfer</button>
                </div>
                {/* <h3>Tug'ilgan yilingiz: {this.state.year}</h3> */}
                <h3>You are {this.state.yosh} years old !</h3>
            </div>
        )
    }
}

export default ClassComponent