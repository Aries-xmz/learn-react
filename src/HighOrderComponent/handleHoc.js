import React, { Component } from "react"

export default (Comp) => {
    return class extends Component {
        render(){
            return <Comp title="hello"></Comp>
        }
    }
}
//通常把生成高阶组件的函数成为高阶组件