import axios from "../services/customAxios";
// import _ from "lodash";

function handleLoginService(userEmail, userPassword) {
	return axios.post("/api/login", { email: userEmail, password: userPassword });
}

function handleGetDataUserService(idUser){
	return axios.get(`/api/${idUser}`);
}

export default { handleLoginService,handleGetDataUserService};
