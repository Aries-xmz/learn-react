import React from 'react';
import ReactDOM from 'react-dom';

// import TodoList from './todolist/TodoList'
import Parent from './life_times/Parent';
ReactDOM.render(
    <>
        {/* <TodoList> </TodoList> */}
        <Parent></Parent>
    </>,
    document.getElementById('root')
);
ReactDOM.unmountComponentAtNode(document.getElementById('root'))