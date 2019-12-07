import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import MovieList from './MovieList'
export default class Movie extends Component {
    render() {
        let { match } = this.props
        return (
            <div>
                <div>Movie</div>
                <div><NavLink to={match.path + '/list/2'}>list</NavLink></div>
                <div><NavLink to={{
                    pathname: match.url + '/list/1',
                    state: { id: 1 }
                }}>list另一种方法</NavLink></div>
                <Route
                    // path="/movie/list"
                    path={match.path + '/list/:id'}
                    component={MovieList}
                />
            </div>
        )
    }
}
