import React, { Component } from "react";

let users = [
    { id: 1, name: "Tomas" },
    { id: 2, name: "Jack" },
    { id: 3, name: "John" },
    { id: 4, name: "Tom" },
    { id: 5, name: "Joe" }
]

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: users,
            username: users.name,
            id: 0,
            isEditMode: false,
        };
    }

    handleInput = (event) => {
        this.setState({
            username: event.target.value,
        });
    };

    addUser = () => {
        const users = [...this.state.users];
        if (this.state.isEditMode) {
            const index = this.state.id;
            users[index].username = this.state.username;
            this.setState({ users, isEditMode: false });
        } else {
            users.push({
                username: this.state.username,
                id: this.state.users.length,
            });
            this.setState({ users });
        }
    };

    deleteUser = (index) => {
        const users = [...this.state.users];
        users.splice(index, 1);
        this.setState({ users });
    };

    editUser = (index) => {
        this.setState({
            username: this.state.users[index].username,
            isEditMode: true,
            id: index,
        });
    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.username} onChange={this.handleInput} />
                <button onClick={this.addUser}>Add User</button>
                <ol>
                    {this.state.users.map((user, index) => (
                        <li key={user.id}>
                            {user.username}
                            <button onClick={() => this.editUser(user.id)}>Edit</button>
                            <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Table;