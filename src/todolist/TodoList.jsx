import React, { Component } from 'react'
import Form from './Form'
import List from './List'
class TodoList extends Component {
    state = {
        keywords: '',
        initValue:'sj'
    }
    componentDidMount(){
        this.setState({
            initValue:'-xmz'
        })
    }
    //vue中有三种状态来源｛data、vuex、props｝
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
                <div form={<Form/>}>I am this.props.children</div>
            </List>
        </>
    }
}
export default TodoList