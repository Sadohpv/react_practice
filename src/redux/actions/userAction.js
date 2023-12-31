// import { toast } from "react-toastify";
// import { loginApi } from "../../services/UserService";
// const USER_LOGIN = "USER_LOGIN";
const USER_LOGIN = "USER_LOGIN";
const USER_REFESH = "USER_REFESH";
const USER_DATA = "USER_DATA";
// const FETCH_USER_ERROR = "FETCH_USER_ERROR";
// const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
// const USER_REFRESH = "USER_REFRESH";
const USER_LOGOUT = "USER_LOGOUT";
const NUMBER_ADD_FRIEND_RECEIVE = "NUMBER_ADD_FRIEND_RECEIVE";
export { USER_LOGIN, USER_REFESH,NUMBER_ADD_FRIEND_RECEIVE,USER_LOGOUT };

export const handleLoginRedux = (userData,token) => {

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: USER_LOGIN,
			data: {
				userData : userData,
				token: token,
			},
		});
	};
};

export const handleRefreshWebRedux = (id,reload,auth)=>{
	return async (dispatch, getState) => {
		dispatch({
			type: USER_REFESH,
			id: id,
			reload : reload,
			auth: auth,
		});
	};
}

export const handleGetDataUserRedux = ()=>{
	return async (dispatch, getState) => {
		dispatch({
			type: USER_DATA,
		});
	};
}

export const handleNumberAddFriendReceiveRedux = (data) => {
	// console.log(data);
	return (dispatch, getState) => {
		dispatch({
			type: NUMBER_ADD_FRIEND_RECEIVE,
			data:data,
		});
	};
};

export const handleRefresh = ()=>{
	return (dispatch, getState) => {
		dispatch({
			type: USER_REFESH,
		})
	};
};
export const handleLogoutRedux = ()=>{

	return async (dispatch, getState) => {
		// console.log(token);
		dispatch({
			type: USER_LOGOUT,
			
		});
	};
};