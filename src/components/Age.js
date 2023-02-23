import React from "react";
import "../components/Age.css"

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: null,
            yosh: null
        }
    }
    render() {
        const onYearChange = (e) => {
            this.setState({ year: Number(e.target.value) })
        }

        const transfer = () => {
            console.log(typeof +this.state.year)
            const yosh = 2023 - this.state.year
            this.setState({ yosh: yosh })
        }

        return (
            <div className="age">
                <h2>Yoshni chiqarish dasturi</h2>
                <input type='number' onChange={onYearChange} />
                <button onClick={transfer}>Transfer</button>
                <h3>Tug'ilgan yilingiz:  {this.state.year}</h3>
                <h3>Siz {this.state.yosh} yoshdasiz ! </h3>
            </div>
        )
    }
}

export default ClassComponent