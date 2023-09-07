import { USER_LOGIN, USER_REFESH } from "../actions/userAction";

const INITIAL_STATE = {
	token : localStorage.getItem("token"),
	
	
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			
			
			localStorage.setItem("auth", true);
			localStorage.setItem("token", action.data.token);
			return {
				...state,
				data_user: {
					
					admin: !action.data.isAdmin,
					auth: true,
				},
				token: action.data.token,

			};
		case USER_REFESH:
			if (localStorage.getItem("token")) {
				return {
					...state,
					data_user: {
						
						admin: localStorage.getItem("admin"),
						auth: localStorage.getItem("auth"),
					},
				};
			}

		default:
			return state;
	}
};

export default userReducer;
