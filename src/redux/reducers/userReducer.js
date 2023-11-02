import { USER_LOGIN, USER_REFESH ,NUMBER_ADD_FRIEND_RECEIVE} from "../actions/userAction";
// import { userService } from "../../services";
const INITIAL_STATE = {
	token: null,
	auth: false,
	userId: null,
	isLoading : true,
	numberReceive : 0,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			// console.log(action.data.userData);
			// console.log("Login");
			return {
				...state,

				auth: true,
				token: action.data.token,
				userId: action.data.userData.idUser,
			};
		case USER_REFESH:
			return {
				...state,

				auth: action.auth,
				userId: action.id,
				isLoading : action.reload,
			};
		case NUMBER_ADD_FRIEND_RECEIVE:
			// console.log(action.data);
			return{
				...state,
				numberReceive : action.data
			}
		default:
			// console.log("Default");
			// console.log(state);

			return state;
	}
};

export default userReducer;
