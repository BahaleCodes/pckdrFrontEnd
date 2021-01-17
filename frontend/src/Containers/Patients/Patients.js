import React, { Component} from 'react';
import Patient from './Patient/Patient';
import './Patients.css';

import Aux from '../../hoc/Auxiliary';

class Patients extends Component {
    buttonHandler = () => {
        this.props.history.push("new-patient")
    }
    pHandler = () => {
        this.props.history.push("new-patient")
    }
    
    render() {
        const data = [
            {id: 1, name: "Thabo Mponya"},
            {id: 2, name: "Keaoleboga Mponya"},
            {id: 3, name: "Mohale Orefile Thabo Mponya"},
        ];
        return (
            <Aux>
                <ul className="Patients">
                    {data.map(item => 
                        <Patient clicked={this.pHandler} key={item.id} patient={item} />
                    )}
                </ul>
                <footer className="New">
                    <button onClick={this.buttonHandler} className="button">New Patient</button>
                </footer>
            </Aux>
        );
    }
}

export default Patients;