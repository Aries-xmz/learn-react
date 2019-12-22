import React, { Component } from 'react'

export default class reactFirst extends Component {
    state = {
        current: null,
        isShow: [false, false, false]
    }

    handleClick(index) {
        if (this.state.current === index) {
            this.setState({
                isShow: [false, false, false],
                current: null
            })
        } else {
            if(this.state.current !== null)
            {
                var flag = !this.state.isShow[this.state.current]
            }
            let onoff = !this.state.isShow[index]
            let arr = this.state.isShow
            arr.splice(this.state.current,1,flag)
            arr.splice(index, 1, onoff)
            this.setState({
                current: index,
                isShow:arr
            })
        }
    }

    render() {
        return (
            <>
                <div onClick={() => this.handleClick(0)} style={{background:`${this.state.isShow[0]?'red':'white'}`}}>
                    aaa
                </div>
                <div onClick={() => this.handleClick(1)} style={{background:`${this.state.isShow[1]?'blue':'white'}`}}>
                    bbb
                </div>
                <div onClick={() => this.handleClick(2)} style={{background:`${this.state.isShow[2]?'green':'white'}`}}>
                    ccc
                </div>
            </>
        )
    }
}
