import React, { Component } from 'react'

export default class RouteChildren extends Component {
    render() {
        return (
            <div>
                我是第三种方法，children
                children跟render的区别，不管路径匹不匹配，都渲染，但是可以“感知”
            </div>
        )
    }
}
