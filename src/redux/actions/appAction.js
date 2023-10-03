
const CHANGE_LANGUAE = "CHANGE_LANGUAE";
const CHANGE_THEME = "CHANGE_THEME ";
const CLOUD_RAIN = "CLOUD_RAIN";
const GOJO = "GOJO";
export {CHANGE_LANGUAE,CHANGE_THEME,CLOUD_RAIN,GOJO}

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

export const handleCouldRainRedux = (show,text) =>{
	return async (dispatch,getState) =>{
		dispatch({
			type: CLOUD_RAIN,
			show,
			text,
		})
	};
}
export const handleGojoRedux = (color)=>{
	return async (dispatch,getState) =>{
		dispatch({
			type: GOJO,
			color
		})
	};
}
