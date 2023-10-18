import axios from "../services/customAxios";

function handleGetMutualFriendService(friend, owner) {
	return axios.post(`/friend/mutual`, {
		friend: friend,
		owner: owner,
	});
}
function handleUnfriendService(friend, owner) {
	console.log("Unfriend Service :");
	console.log("Account User : ", owner, "Friend :", friend);
	return axios.post(`/friend/unfriend`, {
		friend: friend,
		owner: owner,
	});
}
function handleAddFriendService(asking, asked) {
	return axios.post(`/friend/addFriend`, {
		asked: asked,
		asking: asking,
	});
}
function handleCancelAddFriendService(asking,asked){
	return axios.post(`/friend/cancelAddFriend`, {
		asked: asked,
		asking: asking,
	});
}
function handleIsFriendService(userPage , owner){
	return axios.post(`/friend/isFriend`, {
		userPage: userPage,
		owner: owner,
	});
}
export default {
	handleGetMutualFriendService,
	handleUnfriendService,
	handleAddFriendService,
	handleCancelAddFriendService,handleIsFriendService
	
};
