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
function handleCancelAddFriendService(asking, asked) {
	return axios.post(`/friend/cancelAddFriend`, {
		asked: asked,
		asking: asking,
	});
}
function handleIsFriendService(userPage, owner) {
	return axios.post(`/friend/isFriend`, {
		userPage: userPage,
		owner: owner,
	});
}
function handleGetResponseAddFriendService(idUser) {
	return axios.post(`/friend/addFriendResponse`, {
		idUser: idUser,
	});
}
function handleAnswerFriendService(friend_1,friend_2,answer){
	return axios.post(`/friend/addFriendAnswer`, {
		friend_1:friend_1,
		friend_2:friend_2,
		answer : answer,
	});
}
function handleGetRequestAddFriendService(idUser) {
	return axios.post(`/friend/addFriendRequest`, {
		idUser: idUser,
	});
}
export default {
	handleGetMutualFriendService,
	handleUnfriendService,
	handleAddFriendService,
	handleCancelAddFriendService,
	handleIsFriendService,
	handleGetResponseAddFriendService,
	handleAnswerFriendService,
	handleGetRequestAddFriendService
};
