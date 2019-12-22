import React, { Component } from 'react'

class Hreader extends Component{
    render(){
        return(<>
            <div>header</div>
            <div>{this.props.children}</div>
        </>)
    }
}

export default class Compose extends Component {
    render() {
        return (
            <>
                <Hreader>{this.props.children}</Hreader>
            </>
        )
    }
}
