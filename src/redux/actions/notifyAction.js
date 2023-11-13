const FETCH_NOTIFY = "FETCH_NOTIFY";
const READ_NOTIFY = "READ_NOTIFY";
const NUMBER_NOTIFY = "NUMBER_NOTIFY";
export { FETCH_NOTIFY,READ_NOTIFY,NUMBER_NOTIFY};

export const handleFetchNotifyRedux = (data) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: FETCH_NOTIFY,
			data: {
				notify : data,
				
			},
		});

	};
};
export const handleReadNotifyRedux = (index) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: READ_NOTIFY,
			data: {
				index : index,
				
			},
		});
		
	};
};
export const handleNumberNotifyRedux = (number) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: NUMBER_NOTIFY,
			data: {
				number : number,
				
			},
		});
		
	};
};