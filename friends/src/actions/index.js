import axios from 'axios';

// names of action creators
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELTE_FRIEND';


// define action creators
export const getFriends = () => {
	const promise = axios.get('http://localhost:5000/friends');
	return {
		type: GET_FRIENDS,
		payload: promise
	};
};

export const addFriend = (friend) => {
	const promise = axios.post('http://localhost:5000/new-friend', friend);
	return {
		type: ADD_FRIEND,
		payload: promise
	};
};

export const updateFriend = (friendData) => {
	const promise = axios.put('http://localhost:5000/update-friend', friendData);
	return {
		type: UPDATE_FRIEND,
		payload: promise
	};
};

export const deleteFriend = (index) => {
	const promise = axios.delete('http://localhost:5000/delete-friend', {
		data: { index }
	});
	return {
		type: DELETE_FRIEND,
		payload: promise
	};
};