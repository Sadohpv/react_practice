import axios from "../services/customAxios";

function handleGetAllNotifyService(idUser) {
	return axios.get(`/notify/allNotify/${idUser}`);
};

export default {
	handleGetAllNotifyService,
	
};
