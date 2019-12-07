import React, { Component } from 'react'

export default class MovieList extends Component {
    render() {
        console.log(this.props.match.params.id)//路由传参方法一
        console.log(this.props.location.state)//路由传参方法二
        return (
            <div onClick={this.handleClick}>
                MovieList
            </div>
        )
    }
    handleClick = () => {//写成普通函数this是undundefined,至今不知道为啥
        console.log(this)
        this.props.history.push({pathname:'/tv',state:{id:3}})//编程式导航
    }
}
