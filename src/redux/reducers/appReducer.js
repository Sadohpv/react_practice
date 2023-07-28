import { APP_START_UP, CHANGE_LANGUAE,CHANGE_THEME } from "../actions/appAction";

const INITIAL_STATE = {
	language: localStorage.getItem("language") === null ? "en" : localStorage.getItem("language"),
	theme: localStorage.getItem("theme") === null ? "light" : localStorage.getItem("theme"),
};

const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CHANGE_LANGUAE:
			localStorage.setItem("language", action.language);
			return {
				...state,
				language: action.language,
			};
		case CHANGE_THEME:
			localStorage.setItem("theme", action.theme);
			return {
				...state,
				theme: action.theme,
			};
		default:
			return state;
	}
};

export default appReducer;
