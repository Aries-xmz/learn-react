import React, { Component } from 'react'
import hoc from './hoc.js'
class Hoc extends Component {

    static defaultProps = {
        title: 'o_O -> _ <-'
    }

    handleClick=(title)=>() => {
        console.log(this)
    }
    

    render() {
        return (
            <div>
                {this.props.title}
                <button onClick={this.handleClick('cao ni ma')}>change title</button>
            </div>
        )
    }
}
export default hoc(Hoc)