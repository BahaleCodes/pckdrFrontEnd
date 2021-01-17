import React from 'react';
import './Patient.css';

const patient = (props) => (
    <div onClick={props.clicked} className="Patient">
        <h2>{props.patient.name}</h2>
    </div>
)

export default patient;