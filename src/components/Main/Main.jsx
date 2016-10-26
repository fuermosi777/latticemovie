import React from 'react';
import Styles from './Main.less';

export default React.createClass({
    render() {
        return (
            <div className="Main">
                {this.props.children}
            </div>
        );
    }
});