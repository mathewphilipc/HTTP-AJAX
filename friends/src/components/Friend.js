import React from 'react';

const Friend = ({ friend, index }) => {
	return (
		<div>
			<h1>{'Number ${index}'}</h1>
			<h1>{'Name: ${friend.name}'}</h1>
			<h1>{'Age: ${friend.age}'}</h1>
			<h1>{'Email: ${friend.email}'}</h1>
		</div>
	);
}

export default Friend;