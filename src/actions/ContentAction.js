class ContentAction {

    static fetchPopularMovies(cur) {
        cur.refine('popularMoviesUpdating').set(true);
        fetch('/services/popular').then(res => res.json()).then(body => {
            cur.refine('popularMovies').set(body.results);
            cur.refine('popularMoviesUpdating').set(false);
        });
    }

    static fetchSearchMovies(cur, q) {
        cur.refine('searchMoviesUpdating').set(true);
        fetch('/services/search?q=' + q).then(res => res.json()).then(body => {
            cur.refine('searchMovies').set(body.results);
            cur.refine('searchMoviesUpdating').set(false);
        });
    }

    static fetchMovie(id) {
        return fetch('/services/movie?id=' + id).then(res => res.json());
    }

    static fetchSimilar(id) {
        return fetch('/services/similar?id=' + id).then(res => res.json());
    }

    static fetchReviews(id) {
        return fetch('/services/reviews?id=' + id).then(res => res.json());
    }

    static updateKeyword(cur, q) {
        cur.refine('keyword').set(q);
    }

    static removeKeyword(cur) {
        cur.refine('keyword').set('');
    }
}

export default ContentAction;