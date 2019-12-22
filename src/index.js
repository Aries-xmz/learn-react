import React from 'react';
import ReactDOM from 'react-dom';

// import TodoList from './todolist/TodoList'
// import Parent from './life_times/Parent';
// import Parent from './newLifeTimes/Parent'

// import colorContext from './context/color_context'
import { MyProvider } from './context/color_context'
import Index from './routes/Index'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <>
        {/* <TodoList> </TodoList> */}
        {/* <colorContext.Provider></colorContext.Provider> */}
        {/* <Provider value={{color:'red'}}> */}
        <MyProvider>
            <BrowserRouter>
                <Index></Index>
            </BrowserRouter>
        </MyProvider>

        {/* </Provider> */}
    </>,
    document.getElementById('root')
);
// ReactDOM.unmountComponentAtNode(document.getElementById('root'))