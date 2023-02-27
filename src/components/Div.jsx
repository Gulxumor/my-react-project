import React from 'react';
import "../components/div.css"


class ShapeCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: 'Select Shape',
            color: 'Select Color',
            width: 'Select Width',
            height: 'Select Height',
            shapes: [],
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    createShape = () => {
        const { shape, color, width, height } = this.state;

        let newShape;
         if (shape === 'Circle') {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: height,
                borderRadius: '50%',
                margin: '100px auto'
            };
        } else if (shape === 'Oval') {
            newShape = {
                shape: shape,
                color: color,
                width: width * 1.5,
                height: height,
                borderRadius: '50%',
                margin: '100px auto'
            };
        } else if (shape === "Square") {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: width,
            };
        } else if (shape === "Rectangle") {
            newShape = {
                shape: shape,
                color: color,
                width: width,
                height: height,
            };
        }
        this.setState((prevState) => ({
            shapes: [...prevState.shapes, newShape],
        }));
    };

    render() {
        const { shape, color, width, height, shapes } = this.state;
        return (
            <div className='render'>
                <div className="anchor">
                    <a className='link' href="https://github.com/Gulxumor/my-react-project/tree/6-dars/src">Codes of this site</a><br/>
                    <a href="https://adding-username.netlify.app/">Switch to first homework</a>
                </div>
                <div className="shape-wrapper">
                    <select value={shape} name="shape" onChange={this.handleChange}>
                        <option value="Select Shape">Select Shape</option>
                        <option value="Circle">Circle</option>
                        <option value="Square">Square</option>
                        <option value="Rectangle">Rectangle</option>
                        <option value="Oval">Oval</option>
                    </select>
                    <select value={color} name="color" onChange={this.handleChange}>
                        <option value="Select Color">Select Color</option>
                        <option value="red">Red</option>
                        <option value="rgb(13, 245, 71)">Green</option>
                        <option value="rgb(51, 206, 237)">Lightblue</option>
                        <option value="pink">Pink</option>
                    </select>
                    <select value={width} name="width" onChange={this.handleChange}>
                        <option value="Select Width">Select Width</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                    <select value={height} name="height" onChange={this.handleChange}>
                        <option value="Select Height">Select Height</option>
                        <option value="100">100</option>
                        <option value="150">150</option>
                        <option value="200">200</option>
                    </select>
                    <button onClick={this.createShape} id="create-btn">Create </button>
                    {shapes.map((shape) => (
                        <div key={shape.id} style={{ backgroundColor: shape.color, width: `${shape.width}px`, height: `${shape.height}px`, borderRadius: shape.borderRadius }}>
                            {shape.shape}
                        </div>
                    ))}
                </div>
            </div>

        );
    }
}

export default ShapeCreator;



// Biz ushbu kodni foydalanuvchilarga turli rang va kenglikdagi turli shakllarni yaratishga imkon beruvchi React komponentini yaratish uchun yozamiz.
// Konstruktor komponentning boshlang'ich holatini, shu jumladan bo'sh shakllar massivini o'rnatadi. handleChange funksiyasi foydalanuvchi kiritgan ma'lumotlarga asoslanib holat qiymatlarini yangilaydi.
// CreateShape funksiyasi foydalanuvchining tanlovi asosida yangi shakl ob'ektini yaratadi va uni holatdagi shakllar massiviga qo'shadi.
// render funktsiyasi foydalanuvchi kiritishi uchun shakl elementlarini hamda yaratilgan shakllarni ko'rsatadi.