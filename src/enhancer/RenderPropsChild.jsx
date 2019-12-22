import React, { Component } from 'react'

export default class RenderPropsChild extends Component {

    state = {
        title:'lalala'
    }

    render() {
        return (
            <div>
                RenderPropsChild
                {
                    this.props.render(this.state.title)
                }
            </div>
        )
    }
}
