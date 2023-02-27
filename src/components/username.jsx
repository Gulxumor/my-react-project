import React from 'react';
import "./username.css"

let users = [
    { id: 1, name: "Tomas" },
    { id: 2, name: "Jack" },
    { id: 3, name: "John" },
    { id: 4, name: "Tom" },
    { id: 5, name: "Joe" }
]

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: users,
            name: "",
        }
    }

    render() {

        let state = this.state

        let deleteUser = (id) => {
            this.setState({ person: state.person.filter(i => i.id !== id) })
        }

        let onChange = (e) => {
            const { value, name } = e.target;
            this.setState({ [name]: value })
        }

        let addUser = () => {
            let newUser = { id: state.person.length + 1, name: state.name }
            this.setState({ person: [...state.person, newUser], name: "" })
        }

        return (
            <div className='adder'>
                <a className='link' href="https://github.com/Gulxumor/my-react-project/tree/6-dars/src">Codes of this site</a>
                <a href="https://creating-shape.netlify.app/" className="link">Switch to second homework</a>
                <h1>Add user</h1>
                <div className='inputs'>
                    <input type="text" value={state.name} placeholder='Enter your name' onChange={onChange} name="name" />
                    <button id='btn' onClick={addUser}>Add user</button>
                </div>
                {
                    state.person.map(student => (
                        <div key={student.id}>
                            {student.id}-{student.name} - <button onClick={() => deleteUser(student.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}


export default AddUser;



