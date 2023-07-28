const APP_START_UP = "APP_START_UP";
const CHANGE_LANGUAE = "CHANGE_LANGUAE";
const CHANGE_THEME = "CHANGE_THEME ";
export {APP_START_UP,CHANGE_LANGUAE,CHANGE_THEME }

export const changeLanguageRedux = (language) => {

	return async (dispatch, getState) => {
		dispatch({
			type: CHANGE_LANGUAE,
			language,
		});
	};
};
export const changeThemeRedux = (theme) => {

	return async (dispatch, getState) => {
		dispatch({
			type: CHANGE_THEME,
			theme,
		});
	};
};

