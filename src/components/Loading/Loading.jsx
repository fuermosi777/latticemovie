import React from 'react';
import Styles from './Loading.less';

export default React.createClass({
    render() {
        return (
            <div className="Loading">
                <img src={require('./oval.svg')}/>
            </div>
        );
    }
});