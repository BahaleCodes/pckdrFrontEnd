import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => {
    return(
        <div>
            <div className="NavigationItem">
                <NavLink
                    to={props.link}
                    exact={props.exact}
                    activeClassName={"active"}>
                        {props.children}
                </NavLink>
            </div>
        </div>
    )
}

export default navigationItem;