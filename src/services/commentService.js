import axios from "../services/customAxios";

function handleCheckLikedCommentService(idUser) {
	return axios.post(`/comment/checkLiked`, {
		idUser: idUser,
	});
};
function handleUpdateLikedCommentService(idUser,idCom, option) {
	return axios.put(`/comment/putUpdateLikeComment`, {
		idUser:idUser,
		idCom: idCom,
		option: option,
	});
}
export default {
	handleCheckLikedCommentService,
	handleUpdateLikedCommentService,
};
