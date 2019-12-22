import React, { Component } from 'react'
//PureComponent
//PureComponent 纯组件，自动优化，只是浅层次比较
/*对于同步的状态改变，是可以放在componentWillMount，
对于异步的，最好好放在componentDidMount。
但如果此时有若干细节需要处理，比如你的组件需要渲染子组件，
而且子组件取决于父组件的某个属性，那么在子组件的componentDidMount中进行处理会有问题：
因为此时父组件中对应的属性可能还没有完整获取，因此就让其在子组件的componentDidUpdate中处理。*/
export default class Children extends Component {
    constructor() {
        super()
        console.log('constructor')
        //状态或属性的初始化
    }
    UNSAFE_componentWillMount() {
        console.log('componentWillMount')
    }
    render() {
        console.log('render')
        return (<>
            Parent
        </>)
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('componentWillReceivePorps')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
    }
    UNSAFE_componentWillUpdate() {
        console.log('componentWillUpdate');

    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}