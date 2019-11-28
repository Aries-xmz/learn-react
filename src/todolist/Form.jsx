import React, { Component } from 'react'
class Form extends Component {
    state = {
        keywords: '',
    }
    handleChange(e) {
        this.setState({
            keywords: e.target.value
        })
    }
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.props.onReceiveKeyWords(this.state.keywords)
            this.setState({
                keywords:""
            })
        }
    }
    render() {

        return <>
            <input
                onKeyUp={this.handleKeyUp.bind(this)}
                value={this.state.keywords}
                onChange={this.handleChange.bind(this)}
                type="text"
            />
        </>
    }
}
export default Form