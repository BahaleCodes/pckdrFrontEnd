import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Layout from './Components/Layout/Layout';
import Home from './Containers/Home/Home';
import Patients from './Containers/Patients/Patients';
import Records from './Containers/Records/Records';
import NewPatient from './Containers/Patients/NewPatient/NewPatient';

function App() {
	return (
		<div className="App">
			<h1>PocketDoctor</h1>
			<Layout>
				<Route path="/" exact component={Home} />
				<Route path="/patients" component={Patients} />
				<Route path="/records" component={Records} />
				<Route path="/new-patient" component={NewPatient} />
			</Layout>
		</div>
	);
}

export default App;
