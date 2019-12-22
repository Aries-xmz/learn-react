import React, { Component } from 'react'
import colorContext from './color_context'
// import { MyConsumer } from './color_context'

export default class ChildOne extends Component {

    static contextType = colorContext

    handleClick = (color) => () => {
        this.context.changeColor(color)
    }

    render() {
        return (
            <div style={{color:this.context.color}}>
                child one
                <button onClick={this.handleClick('yellow')}>change color</button>
            </div>
            // <MyConsumer>
            //     {
            //         value => (<div>child one - {value.color}</div>)
            //     }
            // </MyConsumer>
        )
    }
}
