import { USER_LOGIN, USER_REFESH } from "../actions/userAction";
import { userService } from "../../services";
const INITIAL_STATE = {
	token: "I'm Here",
	auth: false,
	userId: null,
	isLoading : true,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			// console.log(action.data.userData);
			console.log("Login");
			return {
				...state,

				auth: true,
				token: action.data.token,
				userId: action.data.userData.idUser,
			};
		case USER_REFESH:
			return {
				...state,

				auth: true,
				userId: action.id,
				isLoading : false,
			};

		default:
			// console.log("Default");
			// console.log(state);

			return state;
	}
};

export default userReducer;
