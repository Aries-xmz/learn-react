import React, { Component } from 'react'
import RenderPropsChild from './RenderPropsChild'

export default class RenderProps extends Component {
    render() {
        return (
            <div>
                <div>RenderProps - parent</div>
                <RenderPropsChild
                    render = {
                        (item) => (
                            <div>{item}</div>
                        )
                    }
                ></RenderPropsChild>
            </div>
        )
    }
}
