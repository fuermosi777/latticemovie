import React from 'react';
import Styles from './SearchList.less';
import Movies from '../Movies/Movies.jsx';
import tools from '../../tools';
import Loading from '../Loading/Loading.jsx';
import ContentAction from '../../actions/ContentAction';

export default React.createClass({

    movieData: [],

    componentWillUnmount() {
        ContentAction.removeKeyword(this.props.cur);
    },

    render() {
        let {cur} = this.props;
        return (
            <div className="SearchList">
                <div className="title">Search Movies</div>
                {cur.value().searchMoviesUpdating ? 
                    <Loading/>
                : <Movies data={this.movieData}/>}
            </div>
        );
    },

    componentWillReceiveProps(nextProps) {
        if (tools.cursorChanged(this.props, nextProps, 'searchMoviesUpdating')) {
            this.movieData = nextProps.cur.value().searchMovies;
            this.forceUpdate();
        }
        if (tools.cursorChanged(this.props, nextProps, 'keyword')) {
            this.fetchData(nextProps.cur.value().keyword);
            // this.forceUpdate();
        }
    },

    fetchData(keyword) {
        ContentAction.fetchSearchMovies(this.props.cur, keyword);
    }
});