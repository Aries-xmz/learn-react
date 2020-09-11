import React, { Component } from 'react'
import hoc from './hoc.js'
class Hoc extends Component {

    static defaultProps = {
        title: 'o_O -> _ <-'
    }

    state={
        title:'hoc change'
    }

    handleClick=(title)=>() => {
        this.setState({
            title
        })
    }
    

    render() {
        return (
            <div>
                {this.props.title} - { this.state.title }
                <button onClick={this.handleClick('cao ni ma')}>change title</button>
            </div>
        )
    }
}
export default hoc(Hoc)