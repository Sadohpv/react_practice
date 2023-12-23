import axios from "../services/customAxios";

function handleGetChatService(idUser) {
	return axios.get(`/chat/getChat`);
};

export default {
	handleGetChatService,
	
};
