import axios from "../services/customAxios";


function handleGetMutualFriendService(friend,owner) {
	return axios.post(`/friend/mutual`, {
		friend : friend,
		owner : owner,
	});
}
export default {
	handleGetMutualFriendService,
};
