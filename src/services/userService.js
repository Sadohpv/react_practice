import axios from "../services/customAxios";
// import _ from "lodash";

function handleLoginService(userEmail, userPassword) {
	return axios.post("/api/login", { email: userEmail, password: userPassword });
}

export default { handleLoginService };
