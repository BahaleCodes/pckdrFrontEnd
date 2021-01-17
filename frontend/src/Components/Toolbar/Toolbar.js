import React from 'react';
import './Toolbar.css';

import DrawerToggle from '../DrawerToggle/DrawerToggle';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={"Toolbar"}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={"DesktopOnly"}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;