// const FETCH_NOTIFY = "FETCH_NOTIFY";
// const READ_NOTIFY = "READ_NOTIFY";
const OPEN_CHAT = "OPEN_CHAT";
const CLOSE_CHAT = "CLOSE_CHAT";
const WAIT_CHAT ="WAIT_CHAT";
export { OPEN_CHAT,CLOSE_CHAT,WAIT_CHAT}

export const handleOpenChatRedux = (data) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: OPEN_CHAT,
			data: {
				chatID : data,
				
			},
		});

	};
};

export const handleCloseChatRedux = (data) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: CLOSE_CHAT,
			data: {
				chatID : data,
				
			},
		});

	};
};
export const handleWaitChatRedux = (data) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: WAIT_CHAT,
			data: {
				chatID : data,
				
			},
		});

	};
};
