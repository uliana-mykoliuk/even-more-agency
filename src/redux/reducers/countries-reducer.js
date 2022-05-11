import { GET_COUNTRIES_SUCCESS } from "../actions/countries-actions";

const initialState = {};

const countriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COUNTRIES_SUCCESS:
			return { ...state, countries: action.countries };
		default:
			return state;
	}
};

export default countriesReducer;
