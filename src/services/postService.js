import axios from "../services/customAxios";
import FormData from "form-data";
function handleGetPostService(idUser) {
	return axios.get(`/post/getPost/${idUser}`, {});
}
const handleAddPostService = async ( tokenData , content, image) => {
	const resContent = await axios.post("/post/addPost", { content: content,token: tokenData,image });

	return resContent;
	
};
const handleLikedPostService = async (liked,idPost,idUser) => {
	const resContent = await axios.put("/post/likedPost", {liked:liked , idPost:idPost,idUser:idUser});

	return resContent;
}; 
const handleCheckLikeService = async (idUser) => {

	const resContent = await axios.get(`/post/likedPost/${idUser}`,{});

	return resContent;
	
}; 
export default {
	handleGetPostService,
	handleAddPostService,
	handleLikedPostService,
	handleCheckLikeService
};
