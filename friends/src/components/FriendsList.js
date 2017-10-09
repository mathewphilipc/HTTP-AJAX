import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Friend from './Friend';
import { getFriends } from '../actions';

class FriendsList extends Component {
	componentDidMount() {
		this.props.getFriends();
	}

	render() {
		return (
			<h1>testtesttest</h1>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		friends: state.friends
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getFriends }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList)