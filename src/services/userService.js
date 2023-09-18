import axios from "../services/customAxios";
// import _ from "lodash";

function handleLoginService(userEmail, userPassword) {
	return axios.post("/api/login", { email: userEmail, password: userPassword });
}

function handleGetDataUserService(idUser) {
	return axios.get(`/api/${idUser}`);
}

function handleRegisterService(
	userEmail,
	userPassword,
	firstName,
	lastName,
	userName,
	gender,
	address,
	phoneNumber
) {
	return axios.post("/api/getCreateUser", {
		email: userEmail,
		password: userPassword,
		firstName: firstName,
		lastName: lastName,
		userName: userName,
		gender: gender,
		address: address,
		phoneNumber: phoneNumber,
	});
}

function handleEditUserService(attribute, userId, data) {
	return axios.put(`/api/edit/${attribute}`, {
		userId: userId,
		data: data,
	});
}

function handleSearchService(keyWord) {

	return axios.post(`/api/search`, {
		keyWordSearch : keyWord,
	});
}
function handleGetAccounService() {

	return axios.get(`/api/account`, {
		
	});
}
export default {
	handleLoginService,
	handleGetDataUserService,
	handleRegisterService,
	handleEditUserService,
	handleSearchService,
	handleGetAccounService
};
