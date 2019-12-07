import React from 'react';
import ReactDOM from 'react-dom';

// import TodoList from './todolist/TodoList'
// import Parent from './life_times/Parent';
// import Parent from './newLifeTimes/Parent'
import Index from './routes/Index'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <>
        {/* <TodoList> </TodoList> */}
        <BrowserRouter>
            <Index
            path=""
            ></Index>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);
// ReactDOM.unmountComponentAtNode(document.getElementById('root'))