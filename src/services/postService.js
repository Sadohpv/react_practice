import axios from "../services/customAxios";
import FormData from "form-data";
function handleGetPostService(idUser) {
	return axios.get(`/post/getPost/${idUser}`, {});
}
const handleAddPostService = async ( userId , content, image) => {
	const resContent = await axios.post("/post/addPost", { content: content,userId: userId,image });

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
const handleGetOwnerPost = async (userPage,owner) =>{
	const resContent = await axios.post(`/post/ownerPost`,{userPage:userPage,owner:owner});

	return resContent; 
};
const handleGetOnePostService = async (idPost,idUser)=>{
	// console.log("Here");
	const resContent = await axios.post(`/post/onePost`,{idPost:idPost,owner:idUser});

	return resContent
};
export default {
	handleGetPostService,
	handleAddPostService,
	handleLikedPostService,
	handleCheckLikeService,
	handleGetOwnerPost,handleGetOnePostService

};
