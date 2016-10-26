import React from 'react';
import Styles from './App.less';

import SideBar from '../SideBar/SideBar.jsx';
import Main from '../Main/Main.jsx';
import Search from '../Search/Search.jsx';

export default React.createClass({
    render() {
        return (
            <div className="App">
                <SideBar {...this.props}/>
                <Search {...this.props}/>
                <Main>
                    {this.props.children}
                </Main>
            </div>
        );
    }
});