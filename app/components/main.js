import React from 'react';
import ReactDOM from 'react-dom';
import CommentsList from './commentsList.js';
import CommentsForm from './commentsForm.js';
import firebase from 'firebase';   

var config = {
    apiKey: "AIzaSyDn1pxu4rhHqICjWPnsxM95BcQiBcNpzJE",
    databaseURL: "https://reactapp-98406.firebaseio.com"
  }

 firebase.initializeApp(config);   


class MainComponent extends React.Component {
	render() {
		return (
			<div className="comments-box">
				<CommentsForm />
				<CommentsList />
			</div>
		)
	}
}

ReactDOM.render(
	<MainComponent />, document.getElementById('app')
)