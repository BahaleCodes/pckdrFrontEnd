import React, { Component } from 'react';
import './Layout.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }
    sideDrawerToggleHandler = () => {
        this.setState( (prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        } );
    }
    render () {
        return(
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Sidebar 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className="Content" >
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;