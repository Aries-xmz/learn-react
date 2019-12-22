import React, { Component } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
export default class ContextParent extends Component {
    render() {
        return (
            <div>
                <ChildOne></ChildOne>
                <ChildTwo></ChildTwo>
            </div>
        )
    }
}
