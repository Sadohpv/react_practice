import { USER_LOGIN, USER_REFESH } from "../actions/userAction";

const INITIAL_STATE = {
	data_user: {
		email: "",
		admin: null,
		auth: false,
	},
	token : null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			localStorage.setItem("email", action.data.email.trim());
			localStorage.setItem("admin", !action.data.isAdmin);
			localStorage.setItem("auth", true);
			localStorage.setItem("token", action.data.token);
			return {
				...state,
				data_user: {
					email: action.data.email.trim(),
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
						email: localStorage.getItem("email"),
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
