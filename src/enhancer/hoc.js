import React, { Component } from "react"

export default (Comp) => {
    return class extends Component {

        changeTitle(title){
            return title + 'hahaha'
        }

        render(){
            return (
                <>
                    <Comp changeTitle={this.changeTitle}></Comp>
                </>
            )
        }
    }
}