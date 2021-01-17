import React, { Component} from 'react';
import './Home.css';

class Home extends Component {
    buttonHandler = (props) => {
        this.props.history.push("patients")
    }
    recHandler = (props) => {
        this.props.history.push("records")
    }

    render() {
        return (
            <div className={"Home"}>
                <div className="Buttons">
                    <button onClick={this.buttonHandler}>Add Patient</button>
                    <button onClick={this.recHandler}>Add Record</button>
                </div>
            </div>
        );
    }
}

export default Home;