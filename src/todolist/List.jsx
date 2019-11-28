import React, { Component } from 'react'
class List extends Component {
    state = {
        list: []
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            list: [...this.state.list, props.keywords]
        })
    }
    handleClick(index) {
        this.state.list.splice(index, 1)
        this.setState({})
    }
    render() {
        return (<ul>
            {
                [
                    this.state.list.map((value, index) => {
                        return (
                            <>
                                <li
                                    key={value + index}
                                >
                                    {value}
                                    <button
                                        onClick={this.handleClick.bind(this, index)}
                                    >X</button>
                                </li>
                            </>
                        )
                    })
                ]
            }
            <li>{this.props.children}</li>
        </ul>)

    }
}
export default List