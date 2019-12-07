import React, { Component } from 'react'
import Tv from './Tv';
import Movie from './Movie';
import Page404 from './Page404'
import RRF from './RRF'
import RouteChildren from './RouteChildren'
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom'

import './route.css'
export default class Index extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/movie">movie</Link></li>
                    <li><Link to="/tv">tv</Link></li>
                </ul>
                <ul>
                    <li>
                        <NavLink activeClassName="fz-32" to="/movie">movie</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="fz-32" to="/tv">tv</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="fz-32" to="/rrf">route render function</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="fz-32" to="/routeChildren">route children</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route
                        path="/movie"
                        component={Movie}
                    />
                    {/*当路径匹配的时候才会渲染component,component传入的是对象、类,不是实例*/}
                    <Route
                        path="/tv"
                        component={Tv}
                        renderItem={() => {//增强react组件的方法,三种:高阶组件,渲染函数,组合方式
                            return <div>我是renderItem</div>
                        }}
                    />
                    <Route
                        path="/rrf"
                        render={(props) => {
                            console.log(props)
                            return <RRF {...props} /> //返回的是实例
                        }}
                    />
                    {/* <Route path="/" component={Movie} /> */}
                    <Redirect
                        exact
                        from="/"
                        to="/movie"
                    />
                    <Route
                        path="*"
                        component={Page404}
                    />
                </Switch>
                <Route
                    path="/routeChildren"
                    children={(props) => {
                        console.log(props)
                        return <RouteChildren {...props}></RouteChildren>
                    }}
                />
            </>
        )
    }
}
