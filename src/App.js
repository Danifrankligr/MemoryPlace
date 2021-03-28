import React from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";
import {toast} from "react-toastify";
import {AppContainer, Title, Scores, MainTable, DanConfetti} from "./components/";
import "./App.css";

toast.configure();	// Mandatory method for toast notifications.
export default function App() {
	return (
		<Provider store={store}>
			<AppContainer>
				<Title/>
				<MainTable/>
				<Scores/>
				<DanConfetti/>
			</AppContainer>
		</Provider>
	)
}
