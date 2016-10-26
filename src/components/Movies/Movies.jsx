import React from 'react';
import Styles from './Movies.less';
import {Link} from 'react-router';

export default React.createClass({
    render() {
        return (
            <div className="Movies">
                {this.props.data.length > 0 ? this.props.data.map((item, key) => {
                    var vote = item.vote_average >= 7.7 ? 'good' : (item.vote_average >= 6.0 ? 'neutral' : 'bad');
                    return (
                        <Link to={`/movie/${item.id}`} key={key}>
                            <div className="movie">
                                {item.poster_path ? 
                                    <img className="poster" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/> : 
                                    <img className="poster" src={require('../../resources/no-poster.png')}/>}
                                <div className="title">{item.title}</div>
                                <div className="date">{item.release_date}</div>
                                <div className={`vote ${vote}`}>{item.vote_average}</div>
                            </div>
                        </Link>
                    );
                }) : null}
            </div>
        );
    }
});