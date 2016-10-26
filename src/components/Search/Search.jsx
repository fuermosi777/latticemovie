import React from 'react';
import Styles from './Search.less';
import ContentAction from '../../actions/ContentAction';

export default React.createClass({

    render() {
        return (
            <div className="Search">
                <div className="input-group">
                    <i className="icon-search"/>
                    <input className="search-input" 
                        placeholder="Search movies" 
                        onFocus={this.handleSearchFocus}
                        onKeyDown={this.handleSearchKeyDown}
                        onBlur={this.handleSearchBlur}/>
                </div>
            </div>
        );
    },

    handleSearchFocus(e) { 
        e.target.value = '';
        this.props.history.push('/search');
    },

    handleSearchKeyDown(e) {
        if (e.keyCode === 13) {
            ContentAction.updateKeyword(this.props.cur, e.target.value);
        }
    },

    handleSearchBlur() {

    }
});