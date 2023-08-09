import axios from "../services/customAxios";
function handleGetPostService() {
	return axios.get("/post/getPost", {});
}
export default {

    handleGetPostService
};