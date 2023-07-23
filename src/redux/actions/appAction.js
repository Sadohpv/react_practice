const APP_START_UP = "APP_START_UP";
const CHANGE_LANGUAE = "CHANGE_LANGUAE";
export {APP_START_UP,CHANGE_LANGUAE}

export const changeLanguageRedux = (language) => {

	return async (dispatch, getState) => {
		dispatch({
			type: CHANGE_LANGUAE,
			language,
		});
	};
};