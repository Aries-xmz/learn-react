import React, { Component } from 'react'
import ChildrenHood from './ChildrenHood'
// import colorContext from './color_context'
import { MyConsumer } from './color_context'
export default class ChildTwo extends Component {
    render() {
        return (
        // <colorContext.Consumer></colorContext.Consumer>
        <MyConsumer>
            {
                value => (<div>
                    <div style={{color:value.color}}>Child Two - {value.color}</div>
                    <ChildrenHood></ChildrenHood>
                </div>)
            }
        </MyConsumer>)
    }
}
