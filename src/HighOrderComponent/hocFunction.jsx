import React from 'react'

// export default (props) => {
//     return <div>
//         HocFunction - {props.title}
//     </div>
// }

const HocFunction = (props) => {
    console.log(props)
    return (
        <div>
            hocfunction - {props.title}
        </div>
    )
}
export default React.memo(HocFunction)
//memo 是一个高阶组件,将组件变成一个可缓存的组件