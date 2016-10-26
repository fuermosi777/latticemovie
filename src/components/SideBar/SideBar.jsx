import React from 'react';
import Styles from './SideBar.less';
import {Link} from 'react-router';

export default React.createClass({
    render() {
        var route = this.props.location.pathname;
        return (
            <div className="SideBar">
                <div className="logo">
                    <Link to="/">Lattice Movie</Link>
                </div>
                <div className="menu">
                    <ul className="list">
                        <Link to={`/`}>
                            <li className={route === '/' ? 'active' : ''}>
                                Popular
                            </li>
                        </Link>
                        <Link to={`/search`}>
                            <li className={route === '/search' ? 'active' : ''}>
                                Search
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
});