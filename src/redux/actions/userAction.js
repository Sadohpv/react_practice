// import { toast } from "react-toastify";
// import { loginApi } from "../../services/UserService";
// const USER_LOGIN = "USER_LOGIN";
const USER_LOGIN = "USER_LOGIN";
// const FETCH_USER_ERROR = "FETCH_USER_ERROR";
// const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
// const USER_REFRESH = "USER_REFRESH";
// const USER_LOGOUT = "USER_LOGOUT";

export {USER_LOGIN}

export const handleLoginRedux = (email, password) => {
    alert("Login with " + email + " and " + password);

	return async (dispatch, getState) => {
		dispatch({ type: USER_LOGIN });
        
	};
};

// export const handleLogoutRedux = () => {
// 	return (dispatch, getState) => {
// 		dispatch({
// 			type: USER_LOGOUT,
// 		});
// 	};
// };


// export const handleRefresh = ()=>{
// 	return (dispatch, getState) => {
// 		dispatch({
// 			type: USER_REFRESH,
// 		})
// 	};
// }