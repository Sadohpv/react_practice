import axios from "../services/customAxios";

function handleGetAllNotifyService(idUser) {
	return axios.get(`/notify/allNotify/${idUser}`);
};
function handleReadNotifyService(index) {
	return axios.get(`/notify/readNotify/${index}`);
};
function handleNumberNoReadNotifyService(index) {
	return axios.get(`/notify/numberNoRead/${index}`);
};
export default {
	handleGetAllNotifyService,
	handleReadNotifyService,
	handleNumberNoReadNotifyService
};
