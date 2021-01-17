import React from 'react';
import './Profile.css';

const profile = (props) => (
    <div className={"Profile"} style={{height: props.height}}>
        <img src={""} alt="Logo" />
        <h1>Doctor</h1> 
    </div>
)

export default profile;