import React from 'react';
import Styles from './Popular.less';
import ContentAction from '../../actions/ContentAction';
import Movies from '../Movies/Movies.jsx';
import tools from '../../tools';
import Loading from '../Loading/Loading.jsx';

export default React.createClass({

    movieData: [],

    componentWillMount() {
        ContentAction.fetchPopularMovies(this.props.cur);
    },

    render() {
        let {cur} = this.props;
        return (
            <div className="Popular">
                <div className="title">Popular Movies</div>
                {cur.value().popularMoviesUpdating ? 
                    <Loading/>
                : <Movies data={this.movieData}/>}
            </div>
        );
    },

    componentWillReceiveProps(nextProps) {
        if (tools.cursorChanged(this.props, nextProps, 'popularMoviesUpdating')) {
            this.movieData = nextProps.cur.value().popularMovies;
            console.log(this.movieData);
            this.forceUpdate();
        }
    }
});