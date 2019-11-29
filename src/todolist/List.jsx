import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import ListItem from './ListItem'
class List extends Component {
    // constructor(){
    //     super()
    //     this.handleShowList = this.handleShowList.bind(this)
    // }
    // static defaultProps = {//当该组件没有被传值时，才起效
    //     keywords:'空值'
    // }
    // static propTypes = {
    //     keywords:PropTypes.string.isRequired
    // }
    // static propTypes = {
    //     keywords: function (props, propName, componentName) {
    //         if (props.keywords === 'abc') {
    //             return new Error()
    //         }
    //     }
    // }
    // static propTypes = {
    //     // form: PropTypes.element//检测是不是组件 实例化
    //     //form: PropTypes.elementType // 检测是不是 组件
    // }
    state = {
        list: [],
        show: false
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
    handleShowList = (args) => {
        // this.setState({
        //     show: !this.state.show
        // })
        this.setState((prevState) => {
            return { show: !prevState.show }
        })
        console.log(args)
    }
    render() {
        return (<>
            {
                this.state.show && (<ul>
                    {
                        [
                            this.state.list.map((value, index) => {
                                return (
                                    <ListItem
                                        key={index + value}
                                        value={value}
                                        onItemClick={this.handleClick.bind(this)}
                                        index={index}
                                    ></ListItem>
                                )
                            })
                        ]
                    }
                    <li >
                        <label htmlFor="abc"></label>
                    </li>
                    <li>{this.props.children}</li>
                </ul>)
            }
            {/*
                this.state.show ?
                    <ul>
                        {
                            [
                                this.state.list.map((value, index) => {
                                    return (
                                        // <li
                                        //     key={value + index}
                                        // >
                                        //     {value}
                                        //     <button
                                        //         onClick={this.handleClick.bind(this, index)}
                                        //     >X</button>
                                        // </li>
                                        <ListItem
                                            key={index + value}
                                            value={value}
                                            onItemClick={this.handleClick.bind(this)}
                                            index={index}
                                        ></ListItem>
                                    )
                                })
                            ]
                        }
                        <li>{this.props.children}</li>
                    </ul> : null
            */}
            {/* <button onClick={this.handleShowList.bind(this)}>ShowList</button> 
            <button onClick={this.handleShowList}>ShowList</button>*/}
            <button onClick={() => { this.handleShowList('xmz') }}>ShowList</button>
        </>)

    }
}
export default List