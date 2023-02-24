import React, { Component } from 'react';

class CreateComponent extends Component {
    constructor() {
        super();

        this.state = {
            color: '',
            size: '',
            width: '',
            height: '',
        };
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCreate = () => {
        let { color, size, width, height } = this.state
        this.setState(`Color: ${color}, Size: ${size}, Width: ${width}, Height: ${height}`)
    }

    render() {
        return (
            <div>
                <select name='color' onChange={this.changeHandler}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <select name='size' onChange={this.changeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <select name='width' onChange={this.changeHandler}>
                    <option value="100">100px</option>
                    <option value="200">200px</option>
                    <option value="300">300px</option>
                </select>
                <select name='height' onChange={this.changeHandler}>
                    <option value="100">100px</option>
                    <option value="200">200px</option>
                    <option value="300">300px</option>
                </select>
                <button onClick={this.handleCreate}>Create</button>
            </div>
        );
    }
}

export default CreateComponent;