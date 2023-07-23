import { APP_START_UP,CHANGE_LANGUAE } from "../actions/appAction";


const INITIAL_STATE = {
	language: localStorage.getItem("language") === null ? "en" : localStorage.getItem("language"),
};

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_LANGUAE:
			localStorage.setItem("language", action.language);
			return {
				...state,
				language: action.language
			};
		default:
			return state;
	}
};

export default appReducer;
