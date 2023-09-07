import axios from "../services/customAxios";
import FormData from "form-data";
function handleGetPostService() {
	return axios.get("/post/getPost", {});
}
const handleAddPostService = async ( tokenData , content, image) => {
	const resContent = await axios.post("/post/addPost", { content: content,token: tokenData,image });

	
};
const handleLikedPostService = async (liked,idPost,idUser) => {
	const resContent = await axios.put("/post/likedPost", {liked:liked , idPost:idPost,idUser:idUser});

	
}; 
export default {
	handleGetPostService,
	handleAddPostService,
	handleLikedPostService
};
