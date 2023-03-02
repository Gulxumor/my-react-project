import React from 'react';
import { student } from './mock';
import "./Crud.css"

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            data: student,
            name: "",
            status: "",
            age: null,
            search: 'Search by',
            active: null,
        };
    }
    render() {
        const onChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        };
        const onFilter = (e) => {
            const { value } = e.target;
            let res = student.filter((item) =>
                `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
            );
            this.setState({
                data: res,
            });
        };
        const onDelete = (id) => {
            let res = this.state.data.filter((value) => value.id !== id);
            this.setState({ data: res });
        };
        const onAdd = () => {
            let user = {
                id: this.state.data.length + 1,
                name: this.state.name,
                status: this.state.status,
                age: this.state.age
            };
            this.setState({
                data: [...this.state.data, user],
                name: "",
                status: "",
                age: ""
            });
        };

        const onSelect = (e) => {
            this.setState({ search: e.target.value });
        };

        const onEdit = ({ id, name, status, age }, isSave) => {
            if (isSave) {
                let res = this.state.data.map((value) =>
                    value.id === this.state.active.id ? { ...value, name: this.state.name, status: this.state.status, age:this.state.age }: value
                );
                this.setState({ active: null, data: res });
            } else {
                this.setState({
                    name: name,
                    status: status,
                    age:age,
                    active: { id, name, status, age },
                });
            }
        };
        return (
            <div className='table'>
                <a href='https://github.com/Gulxumor/my-react-project/tree/7-dars' style={{ color: 'cornflowerblue' }}>Webbrain Academy</a>
                <hr />
                <div>
                    <input id='search' onChange={onFilter} type='text' placeholder='Search...' />
                    <select onChange={onSelect}>
                        <option value='Search by'>Search by</option>
                        <option value='id'>ID</option>
                        <option value='name'>Name</option>
                        <option value='status'>Status</option>
                        <option value='age'>Age</option>
                    </select>
                </div>
                <hr />

                <input className="input"onChange={onChange}
                    value={this.state.name}
                    name='name'
                    type='text'
                    placeholder='Add new username...'
                />
                <input className="input"
                    value={this.state.status}
                    name='status'
                    onChange={onChange}
                    placeholder="Add status..."
                />
                <input className="input"
                    value={this.state.age}
                    name='age'
                    onChange={onChange}
                    placeholder="Add age..."
                />
                <button className='add-btn' onClick={onAdd}>Add</button>
                <table width={'100%'}>
                    <thead>
                        <tr className='title'>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Age</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.length ? (
                            this.state.data.map(({ id, name, status, age }) => {
                                return (
                                    <tr key={id}>
                                        <td> {id}</td>
                                        <td>
                                            {' '}
                                            {this.state.active?.id === id ? (
                                                <input className="input"
                                                    onChange={onChange}
                                                    name='name'
                                                    value={this.state.name}
                                                    type='text'
                                                />
                                            ) : (
                                                name
                                            )}
                                        </td>
                                        <td>
                                            {this.state.active?.id === id ? (
                                                <input className="input"
                                                    onChange={onChange}
                                                    name='status'
                                                    value={this.state.status}
                                                    type='text'
                                                />
                                            ) : (
                                                status
                                            )}
                                        </td>
                                        <td>
                                            {this.state.active?.id === id ? (
                                                <input className="input"
                                                    onChange={onChange}
                                                    name='age'
                                                    value={this.state.age}
                                                    type='number'
                                                />
                                            ) : (
                                                age
                                            )}
                                        </td>
                                        <td>
                                            <button className='delete-btn' onClick={() => onDelete(id)}>Delete</button>
                                        </td>
                                        <td>
                                            <button className='edit-btn'
                                                onClick={() =>
                                                    onEdit(
                                                        { id, name, status, age },
                                                        this.state.active?.id === id
                                                    )
                                                }
                                            >
                                                {this.state.active?.id === id ? 'Save' : 'Edit'}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <th colSpan={5}>
                                    <h1>No data</h1>
                                </th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;