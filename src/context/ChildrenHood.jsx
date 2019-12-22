import React, { Component } from 'react'
// import colorContext from './color_context'
import { MyConsumer } from './color_context'

export default class ChildrenHood extends Component {

    // static contextType = colorContext

    render() {
        // let { color } = this.context

        return (
            // <div style={{color}}>
            //     children hood
            // </div>
            <MyConsumer>
                {
                    value => (<div>child hood - {value.color}</div>)
                }
            </MyConsumer>
        )
    }
}
