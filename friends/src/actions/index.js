import axios from 'axios';

// names of action creators
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIENDS = 'ADD_FRIENDS';


// define action creators
export const getFriends = () => {
	const promise = axios.get('http://localhost:5000/friends');
	return {
		type: GET_FRIENDS,
		payload: promise
	};
};

export const addFriends = (friend) => {
	const promise = axios.post('http://localhost:5000/new-friend', friend);
	return {
		type: ADD_FRIENDS,
		payload: promise
	};
};