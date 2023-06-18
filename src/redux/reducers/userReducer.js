import {

	USER_LOGIN,

} from "../actions/userAction";

const INITIAL_STATE = {
	data_user: {
		email: "",
		auth: false,
		
	},
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			console.log('User logged in with ' + action.data.email);
			console.log(!action.data.isAdmin);
			return {
                ...state,
				data_init:{
					email: action.data.email,
					auth: !action.data.isAdmin,
				}
            };
	
		default:
		
		return state;
			
	}
};

export default userReducer;
