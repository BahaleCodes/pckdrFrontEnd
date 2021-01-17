import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return(
        <ul className={"NavigationItems"}>
            <NavigationItem id={"home"} link="/" exact>Home</NavigationItem>
            <NavigationItem link="/patients">Patients</NavigationItem>
            <NavigationItem link="/records">Records</NavigationItem>
        </ul>
    )
}

export default navigationItems;