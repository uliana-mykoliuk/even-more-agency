import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import countriesReducer from "./redux/reducers/countries-reducer";
import countriesSaga from "./redux/sagas/countries-saga";
import "./index.css";

import HomePage from "./pages/home-page.page";
import CountryPage from "./pages/country-page.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const sagaMidleware = createSagaMiddleware();

const rootReducer = combineReducers({ countriesReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMidleware));
sagaMidleware.run(countriesSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/country/:name" element={<CountryPage />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
);
