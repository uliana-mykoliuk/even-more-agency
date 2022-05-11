import { call, put, takeEvery } from "redux-saga/effects";
import { GET_COUNTRIES_FETCH, GET_COUNTRIES_SUCCESS } from "../actions/countries-actions";

function countriesFetch() {
	return fetch("https://restcountries.com/v2/all").then(response => response.json());
}

function* workGetCountriesFetch() {
	const countries = yield call(countriesFetch);
	yield put({ type: GET_COUNTRIES_SUCCESS, countries });
}

function* countriesSaga() {
	yield takeEvery(GET_COUNTRIES_FETCH, workGetCountriesFetch);
}

export default countriesSaga;
