import {

	USER_LOGIN,

} from "../actions/userAction";

const INITIAL_STATE = {
	data_init: {
		email: "",
		auth: null,
		token: "",
	},
    isLoading: false,
    isError: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
                ...state,
                isLoading: true,
                isError: false,
            };
	
		default:
		
		return state;
			
	}
};

export default userReducer;
