import React from 'react';
import Comment from './comment.js';
import CommentsTitle from './commentsTitle.js';
import CommentsToggle from './commentsToggle.js';
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import firebase from 'firebase';   


export default class CommentsList extends React.Component {

	constructor(){
		super();

		this.state = {
			showComments: true,
			comments: []  
		}
	}

	

	componentDidMount(){
		this.bindAsArray(firebase.database().ref().child('comments'), 'comments');    
	}

	_toggleShowComments(){
		this.setState({
			showComments: !this.state.showComments
		})
	}

	render() {
		let commentsCount = this.state.comments.length;  
		let commentsList;

		if(commentsCount > 0 && this.state.showComments){
			commentsList = 	<ul className="comments-list">

                {
                	this.state.comments.map((comment, index) => {
                		return <Comment key={index} author={comment.name} text={comment.text} id={comment['.key']}/>  
                	})
                }

                </ul>		
		}

		return (
			<div className="comments-body">
				<CommentsTitle counter={commentsCount} />
                <CommentsToggle toggleComments={this._toggleShowComments.bind(this)} isShow={this.state.showComments} />
                {commentsList}
            </div>
		)
	}
}

ReactMixin(CommentsList.prototype, ReactFireMixin);