import React, { Component } from 'react';
import "../components/div.css"

class CreateImage extends Component {
    state = {
        shape: 'circle',
        color: 'red',
        width: '100px',
        height: '100px'
    }

    handleSelectChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCreateButton = () => {
        const { shape, color, width, height } = this.state;
        return (
            <div className='div'>
                <div className="div-wrapper">
                    <div>
                        <select name="shape" onChange={this.handleSelectChange} defaultValue="circle">
                            <option value="circle">Circle</option>
                            <option value="triangle">Triangle</option>
                            <option value="square">Square</option>
                            <option value="rectangle">Rectangle</option>
                        </select>
                        <select name="color" onChange={this.handleSelectChange} defaultValue="red">
                            <option value="red">Red</option>
                            <option value="rgb(13, 245, 71)">Green</option>
                            <option value="rgb(51, 206, 237)">Lightblue</option>
                            <option value="pink">Pink</option>
                        </select>
                        <select name="width" onChange={this.handleSelectChange} defaultValue="100px">
                            <option value="100px">100px</option>
                            <option value="200px">200px</option>
                            <option value="300px">300px</option>
                            <option value="400px">400px</option>
                        </select>
                        <select name="height" onChange={this.handleSelectChange} defaultValue="100px">
                            <option value="100px">100px</option>
                            <option value="200px">200px</option>
                            <option value="300px">300px</option>
                            <option value="400px">400px</option>
                        </select>
                        <button onClick={this.handleCreateButton}>Create</button>
                    </div>
                    {this.renderShape(shape, color, width, height)}
                </div>
            </div>
        )
    }

    renderShape = (shape, color, width, height) => {
        if (shape === 'circle') {
            return <div style={{
                borderRadius: '50%',
                backgroundColor: color,
                width: width,
                height: height,
                margin: '100px auto'
            }}>
            </div>
        } else if (shape === 'triangle') {
            return <div style={{
                width: '0',
                height: '0',
                borderLeft: ` ${width} solid transparent`,
                borderRight: `${width} solid transparent`,
                borderBottom: `${height} solid ${color}`,
                margin: '100px auto'
            }
            }>
            </div >
        } else if (shape === 'square') {
            return <div style={{
                backgroundColor: color,
                width: width,
                height: width,
                margin: '100px auto'
            }}>
            </div>
        } else if (shape === 'rectangle') {
            return <div style={{
                backgroundColor: color,
                width: width,
                height: height,
                margin: '100px auto'
            }}>
            </div>
        }
    }

    render() {
        return (
            <div>
            {this.handleCreateButton()}
        </div>
    );
}
}

export default CreateImage;