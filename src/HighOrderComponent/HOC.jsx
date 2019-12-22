import React, { Component } from 'react'

import hoc from './handleHoc'
import HocFunction from './hocFunction'
class HOC extends Component {

    state = {
        title: 'hoc'
    }
    hanleClick = () => {
        this.setState({
            title: 'I am the king of the world'
        })
    }

    render() {
        // console.log(this.props)
        return (<div>
            High Order Component
                <HocFunction title={this.state.title}></HocFunction>
            <button onClick={this.hanleClick}>change title</button>
        </div>)
    }
}

export default hoc(HOC)