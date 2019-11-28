import React, { Component } from 'react'
import PropTypes from 'prop-types'
class List extends Component {
    static defaultProps = {
        keywords:'空值'
    }
    // static propTypes = {
    //     keywords:PropTypes.string.isRequired
    // }
    static propTypes = {
        keywords: function (props, propName, componentName) {
            if (props.keywords === 'abc') {
                return new Error()
            }
        }
    }
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
                            <li
                                key={value + index}
                            >
                                {value}
                                <button
                                    onClick={this.handleClick.bind(this, index)}
                                >X</button>
                            </li>
                        )
                    })
                ]
            }
            <li>{this.props.children}</li>
        </ul>)

    }
}
export default List