var request = require('request');

class TMDB {
    
    constructor(api_key) {
        this.api_key = api_key;
    }

    _request(method, url, data) {
        var options = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }

        return new Promise((resolve, reject) => {
            request(options, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    resolve(JSON.parse(body));
                } else {
                    reject(err);
                }
            });
        });
    }

    _get(url) {
        return this._request('GET', url)
    }

    popular() {
        return this._get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.api_key}&language=en-US`);
    }

    search(keyword) {
        return this._get(`https://api.themoviedb.org/3/search/movie?api_key=${this.api_key}&query=${keyword}`)
    }

    movie(movie_id) {
        return this._get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${this.api_key}&language=en-US`)
    }

    reviews(movie_id) {
        return this._get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${this.api_key}&language=en-US`);
    }

    similar(movie_id) {
        return this._get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${this.api_key}&language=en-US`)
    }

}

module.exports = TMDB;