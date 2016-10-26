import React from 'react';
import Styles from './Movie.less';
import Loading from '../Loading/Loading.jsx';
import ContentAction from '../../actions/ContentAction';
import {Link} from 'react-router';

export default React.createClass({

    movieData: null,
    similar: [],
    reviews: [],
    isLoading: false,

    componentWillMount() {
        var movieId = this.props.params.movieId;
        this.fetchData(movieId);
    },

    fetchData(movieId) {
        this.isLoading = true;
        this.forceUpdate();

        var fetchMovie = ContentAction.fetchMovie(movieId);
        var fetchSimilar = ContentAction.fetchSimilar(movieId);
        var fetchReviews = ContentAction.fetchReviews(movieId);

        Promise.all([fetchMovie, fetchSimilar, fetchReviews]).then(json => {
            this.movieData = json[0];
            this.similar = json[1].results;
            this.reviews = json[2].results;
            this.isLoading = false;
            this.forceUpdate();
        })
    },

    render() {
        if (this.movieData) {
            var vote = this.movieData.vote_average >= 7.7 ? 'good' : (this.movieData.vote_average >= 6.0 ? 'neutral' : 'bad');
        }
        let {cur} = this.props;
        return (
            
            <div className="Movie">
                {this.isLoading ? <Loading/> : null}
                {this.movieData && !this.isLoading ? 
                <div className="box">
                    <div className="poster">
                        {this.movieData.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${this.movieData.poster_path}`}/> : <img src={require('../../resources/no-poster.png')}/>}
                    </div>
                    <div className="detail">
                        <div className="title">{this.movieData.title}</div>
                        <div className="date">{this.movieData.release_date}</div>
                        <div className="genres">
                            {this.movieData.genres.map((item, key) => {
                                return (
                                    <span key={key}>{item.name}</span>
                                );
                            })}
                        </div>
                        <div className="overview">{this.movieData.overview}</div>
                        <div className={`vote ${vote}`}>{this.movieData.vote_average}</div>
                        {this.reviews.length > 0 ? 
                        <div className="reviews">
                            <div className="title">Reviews</div>
                            {this.reviews.map((item, key) => {
                                return (
                                    <div className="review" key={key}>
                                        <div className="author">{item.author}</div>
                                        <div className="content">{item.content.substring(0, 200)}...</div>
                                    </div>
                                );
                            })}
                        </div>
                        : null}
                    </div>
                </div> 
                : null}
                {this.similar.length > 0 && !this.isLoading ? 
                <div className="similar">
                    <div className="title">Similar Movies</div>
                    <div className="movies">
                        {this.similar.map((item, key) => {
                            return (
                                <div className="movie" key={key}>
                                    <Link to={`/movie/${item.id}`}>
                                        {item.poster_path ? <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/> : <img src={require('../../resources/no-poster.png')}/>}
                                    </Link>
                                </div>
                                );
                        })}
                    </div>
                </div>
                : null}
                
            </div>
        );
    },

    componentWillReceiveProps(nextProps) {
        this.fetchData(nextProps.params.movieId);
    }
});