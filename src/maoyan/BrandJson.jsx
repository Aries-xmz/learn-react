import React, { Component } from 'react'
// import axios from 'axios'
export default class BrandJson extends Component {

    state = {
        data: {},
        currentIndex: 0
    }

    async componentDidMount() {
        let result = require('../assets/JSON/brand.json')
        this.setState({
            data: result
        })
    }

    handleHeighLight = (index) => () => {
        this.setState({
            currentIndex: index
        })
    }


    render() {
        let arr = this.state.data.district ? this.state.data.district.subItems : []
        let items = arr[this.state.currentIndex] ? arr[this.state.currentIndex].subItems : []
        return (
            <div style={{ border: 'solid #000 1px', height: 300, display: 'flex', flexDirection: 'row' }}>
                <div style={{ border: 'solid #ccc 2px', height: '100%', width: '30%', boxSizing: 'border-box', overflowY: 'scroll' }}>
                    {
                        arr.map((val, index) =>
                            <div
                                onClick={this.handleHeighLight(index)}
                                style={{ border: 'solid pink 1px', boxSizing: 'border-box', color: `${this.state.currentIndex === index ? 'red' : 'black'}` }}
                                key={val.id}
                            >
                                {val.name}
                            </div>
                        )
                    }
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', border: 'solid #444 2px', height: '100%', width: '70%', boxSizing: 'border-box', overflowY: 'scroll' }}>
                    {
                        items.map((item) =>
                            <div style={{ height: '2rem', width: '33%', border: 'solid pink 1px', boxSizing: 'border-box' }} key={item.id}>{item.name}</div>
                        )
                    }
                </div>
            </div>
        )
    }
}
