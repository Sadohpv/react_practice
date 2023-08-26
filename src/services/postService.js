import axios from "../services/customAxios";
import FormData from "form-data";
function handleGetPostService() {
	return axios.get("/post/getPost", {});
}
const handleAddPostService = async ( tokenData , content, image) => {
	const resContent = await axios.post("/post/addPost", { content: content,token: tokenData,image });

	// const formData = new FormData();
	// formData.append("image", image);
	// formData.append("content", content);
	// formData.append("token", tokenData);
	// console.log("Here");
	// const resImg = await axios.post("/post/addPost", formData, {
	// 	headers: {
	// 		"Content-Type": "multipart/form-data",
	// 	},
	// });

	console.log(resContent);
	// console.log(resImg);

	// return resImg;
};
export default {
	handleGetPostService,
	handleAddPostService,
};
