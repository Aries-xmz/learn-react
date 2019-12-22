import React, { Component } from 'react'
import Tv from './Tv';
import Movie from './Movie';
import Page404 from './Page404'
import RRF from './RRF'
import RouteChildren from './RouteChildren'
import ReactArray from '../pages/reactFirst'
import Parent from '../life_times/Parent'
import ContextParent from '../context/ContextParent'
import { Route, Switch, Redirect, Link, NavLink } from 'react-router-dom'
import HOC from '../HighOrderComponent/HOC'
import Hoc from '../enhancer/Hoc.jsx'
import BrandJson from '../maoyan/BrandJson'
import ComposeApply from '../enhancer/ComposeApply'
import './route.css'
import RenderProps from '../enhancer/RenderProps';
export default class Index extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="/movie">movie</Link></li>
                    <li><Link to="/tv">tv</Link></li>
                    <li><Link to="/react-array">react-array</Link></li>
                    <li><Link to="/context">context</Link></li>
                    <li><Link to="/hoc">HighOrderComponent</Link></li>
                    <li><Link to="/composeApply">enhancer</Link></li>
                    <li><Link to="/enhancer-hoc">enhancer - hoc</Link></li>
                    <li><Link to="/enhancer-props">enhancer - renderprops</Link></li>
                    <li><Link to="/brand-json">BrandJson</Link></li>
                </ul>
                <ul>
                    <li>
                        <NavLink activeClassName="fz-32" to="/old-life-cycle">oldLifeCycle</NavLink>
                    </li>
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
                        path="/brand-json"
                        component={BrandJson}
                    />
                    <Route
                        path="/react-array"
                        component={ReactArray}
                    />
                    <Route
                        path="/enhancer-props"
                        component={RenderProps}
                    />
                    <Route
                        path="/enhancer-hoc"
                        component={Hoc}
                    />
                    <Route
                        path="/context"
                        component={ContextParent}
                    />
                    <Route
                        path="/composeApply"
                        component={ComposeApply}
                    />
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
                        path="/hoc"
                        component={HOC}
                    />
                    <Route
                        path="/old-life-cycle"
                        component={Parent}
                    ></Route>
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
                        // console.log(props)
                        return <RouteChildren {...props}></RouteChildren>
                    }}
                />
            </>
        )
    }
}
