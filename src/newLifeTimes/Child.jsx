import React, { Component } from 'react'

export default class Child extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            name : 'xmz'
        }
        /* 该组件 使用 getDerivedStateFromProps ，但它的初始状态是未定义的。
        不建议这样做。
        相反，通过将对象赋值给 this 来定义初始状态。
        在 该组件 的构造函数中声明 this.state。
        这确保了' getDerivedStateFromProps '参数有一个一致的形状。*/
    }
    static getDerivedStateFromProps() {//
        console.log('getDerivedStateFromProps')
        return null
        //必须返回一个有效的对象，或者返回null
        //pureComponent帮助做优化
    }
    render() {
        return <>
            hello dearest
            honey select
        </>
    }
    componentDidMount(){
        this.forceUpdate()
    }
}