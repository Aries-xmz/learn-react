import React, { Component ,createRef} from 'react'
class Form extends Component {
    constructor(){
        super()//想使用this，就要用super()
        this.inputRef = createRef()
    }
    // state = {
    //     keywords: '',
    //     arr:['a','b']
    // }
    handleChange(e) {
        
        // this.setState({
        //     keywords: e.target.value
        // })
        //this.state.arr.push(e.target.value)//缺少上面语句，input成为受控组件，但能对当前数组进行修改
        // this.state.keywords = e.target.value//警告，不要试图去直接修改状态的属性值
        //state不能直接修改，引用值可以直接改变，但是却不生（指的是渲染dom）
    }
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            let input = this.inputRef.current
            this.props.onReceiveKeyWords(input.value)
            input.value = ''
            // this.props.onReceiveKeyWords(this.state.keywords)
            // this.setState({
            //     keywords:""
            // })
        }
    }
    render() {

        return <>
            <input
                ref={this.inputRef}
                onKeyUp={this.handleKeyUp.bind(this)}
                // value={this.state.keywords}
                // onChange={this.handleChange.bind(this)}
                type="text"
            />
            {/*
                this.state.arr.map((value,index)=>{
                    return <span key={value + index}>{value}</span>
                })
            */}
        </>
    }
}
export default Form