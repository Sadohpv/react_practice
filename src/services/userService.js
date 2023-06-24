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
	userName,
	firstName,
	lastName,
	address,
	gender
) {
	return axios.post("/api/getCreateUser", {
		email: userEmail,
		password: userPassword,
		userName: userName,
		firstName: firstName,
		lastName: lastName,
		address: address,
		gender: gender,
	});
}

export default { handleLoginService, handleGetDataUserService, handleRegisterService };
