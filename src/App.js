import React from 'react'
import TodoList from './components/To do/TodoList'

export default function App() {
    return (
        <div className='todo-app'>
            <a href='https://github.com/Gulxumor/my-react-project/tree/for/src' style={{marginTop:"20px"}}>Source code</a>
            <TodoList />
        </div>
    )
}
