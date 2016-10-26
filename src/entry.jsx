import React from 'react';
import ReactDOM from 'react-dom'; 
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Popular from './components/Popular/Popular.jsx';
import SearchList from './components/SearchList/SearchList.jsx';
import Movie from './components/Movie/Movie.jsx';
import App from './components/App/App.jsx';
import {Cursor} from 'react-cursor';

const routes = (
    <Router history={browserHistory}>
        <Router path="/" component={App}>
            <IndexRoute component={Popular}/>
            <Route path="search" component={SearchList}/>
            <Route path="/movie/:movieId" component={Movie}/>
        </Router>
    </Router>
)

var Store = React.createClass({
    getInitialState() {
        return {
            popularMovies: [],
            popularMoviesUpdating: false,
            searchMovies: [],
            searchMoviesUpdating: false,
            keyword: '',
        };
    },
    render() {
        return (
            <Router history={browserHistory} createElement={this.createElement} routes={routes}/>
        );
    },
    createElement(Component, props) {
        var cur = Cursor.build(this);
        return <Component {...props} cur={cur}/>;
    }

});

ReactDOM.render(<Store/>, document.getElementById('container')
);