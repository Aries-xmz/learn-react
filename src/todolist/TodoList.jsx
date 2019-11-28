import React, { Component } from 'react'
import Form from './Form'
import List from './List'
class TodoList extends Component {
    state = {
        keywords: ''
    }
    handleReceiveKeyWords(keywords) {
        this.setState({
            keywords
        })
    }
    render() {
        return <>
            <Form
                onReceiveKeyWords={this.handleReceiveKeyWords.bind(this)}
            ></Form>
            <List
                keywords={this.state.keywords}
            >
                <div>I am this.props.children</div>
            </List>
        </>
    }
}
export default TodoList