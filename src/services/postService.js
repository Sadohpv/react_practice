import axios from "../services/customAxios";
// import FormData from "form-data";
function handleGetPostService(idUser,page) {
	return axios.get(`/post/getPost/${idUser}/${page}`, {});
}
const handleAddPostService = async (userId, content, image) => {
	const resContent = await axios.post("/post/addPost", {
		content: content,
		userId: userId,
		image,
	});

	return resContent;
};
const handleLikedPostService = async (liked, idPost, idUser) => {
	const resContent = await axios.put("/post/likedPost", {
		liked: liked,
		idPost: idPost,
		idUser: idUser,
	});

	return resContent;
};
const handleCheckLikeService = async (idUser) => {
	const resContent = await axios.get(`/post/likedPost/${idUser}`, {});

	return resContent;
};
const handleGetOwnerPost = async (userPage, owner) => {
	const resContent = await axios.post(`/post/ownerPost`, { userPage: userPage, owner: owner });

	return resContent;
};
const handleGetOwnerPhoto = async (userPage, owner) => {
	const resContent = await axios.post(`/post/ownerPhoto`, { userPage: userPage, owner: owner });

	return resContent;
};
const handleGetOnePostService = async (idPost, idUser) => {
	// console.log("Here");
	const resContent = await axios.post(`/post/onePost`, { idPost: idPost, owner: idUser });

	return resContent;
};
const handleGetCommentPost = async (id,commentPage) => {
	const res = await axios.get(`/post/comment/${id}/${commentPage}`);
	return res;
};
const handlePushCommentPostService = async (idWhoComment, idPostComment, content) => {
	const resContent = await axios.post(`/post/pushComment`, {
		idWhoComment: idWhoComment,
		idPostComment: idPostComment,
		content: content,
	});

	return resContent;
};
const handleSavePostService = async (idUser, idPostSave) => {
	const resContent = await axios.post(`/post/savePost`, {
		idUser: idUser,
		idPostSave: idPostSave,
	
	});

	return resContent;
};
const handleGetSavedPost = async (idUser)=>{
	const resContent = await axios.get(`/post/savedPost/${idUser}`)

	return resContent;
};
export default {
	handleGetPostService,
	handleAddPostService,
	handleLikedPostService,
	handleCheckLikeService,
	handleGetOwnerPost,
	handleGetOnePostService,
	handleGetCommentPost,
	handlePushCommentPostService,
	handleSavePostService,
	handleGetSavedPost,
	handleGetOwnerPhoto
};
