import React, { createContext, Component } from 'react'
const colorContext = createContext()
export default colorContext

let {
    Provider,
    Consumer: MyConsumer
} = colorContext
// export {
//     Provider,
//     Consumer
// }
// console.log(colorContext)

//second way
// export default colorContext

class MyProvider extends Component {
    constructor() {
        super()
        this.state = {
            color: 'red'
        }
    }

    changeColor = (color) => {
        this.setState({
            color
        })
    }

    render() {
        return (<Provider value={{ color: this.state.color, changeColor: this.changeColor }}>
            {this.props.children}
        </Provider>)
    }
}
export {
    MyProvider,
    MyConsumer
}