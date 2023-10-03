import { APP_START_UP, CHANGE_LANGUAE,CHANGE_THEME,CLOUD_RAIN ,GOJO} from "../actions/appAction";

const INITIAL_STATE = {
	language: localStorage.getItem("language") === null ? "en" : localStorage.getItem("language"),
	theme: localStorage.getItem("theme") === null ? "light" : localStorage.getItem("theme"),
	cloud_rain:  localStorage.getItem("cloud_rain") === null ? "on" : localStorage.getItem("cloud_rain"),
	cloud_rain_text : localStorage.getItem("cloud_rain_text") === null ? "Kusakari♥" : localStorage.getItem("cloud_rain_text"),
	rain_color : "white",
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
		case CLOUD_RAIN : 
			localStorage.setItem("cloud_rain",action.show);
			localStorage.setItem("cloud_rain_text",action.text);
			return{
				...state,
				cloud_rain: action.show,
				cloud_rain_text : action.text,
			};
		case GOJO : 
		return{
			...state,
			rain_color : action.color,
		}
		default:
			return state;
	}
};

export default appReducer;
