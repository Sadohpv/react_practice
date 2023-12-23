import { OPEN_CHAT, CLOSE_CHAT, WAIT_CHAT,CLOSE_WAIT_CHAT } from "../actions/chatAction";
// import { userService } from "../../services";
const INITIAL_STATE = {
	chatList: [],
	waitChatList: [],
};

const chatReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case OPEN_CHAT:
			// console.log(action.data);
			// console.log("Login");
			let newList = [];
			if (state.chatList.includes(action.data.chatID) == false) {
				newList = [...state.chatList, action.data.chatID];
				if (state.waitChatList.includes(action.data.chatID)) {
					return {
						...state,
						chatList: newList,
						waitChatList: state.waitChatList.filter(
							(item) => item !== action.data.chatID
						),
					};
				} else {
					return {
						...state,
						chatList: newList,
					};
				}
			} else {
				return {
					...state,
				};
			}
		case CLOSE_CHAT:
			if (state.chatList.includes(action.data.chatID) == true) {
				return {
					...state,
					chatList: state.chatList.filter((item) => item !== action.data.chatID),
					// waitChatList: state.waitChatList.filter((item) => item !== action.data.chatID),
				};
			} else {
				return {
					...state,
				};
			}
		case WAIT_CHAT:
			let waitList = [];
			if (state.waitChatList.includes(action.data.chatID) == false) {
				waitList = [...state.waitChatList, action.data.chatID];

				return {
					...state,
					chatList: state.chatList.filter((item) => item !== action.data.chatID),

					waitChatList: waitList,
				};
			} else {
				return {
					...state,
				};
			}
		case CLOSE_WAIT_CHAT:
			if (state.waitChatList.includes(action.data.chatID) == true) {
				return {
					...state,
					
					waitChatList: state.waitChatList.filter((item) => item !== action.data.chatID),
				};
			} else {
				return {
					...state,
				};
			}
		default:
			// console.log("Default");
			// console.log(state);

			return state;
	}
};

export default chatReducer;
