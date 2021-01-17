import React from 'react';
import './Sidebar.css';

import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Profile from '../Profile/Profile';

const sidebar = (props) => {
    let attachedClasses = ["SideBar", "Close"];
    if (props.open) {
        attachedClasses = ["SideBar", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={"SideBar"}>
                    <div className={"Profile"}>
                        <Profile />
                    </div>
                    <div className={"NavSection"}>
                        <NavigationItems />
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default sidebar;