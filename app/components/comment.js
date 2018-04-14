import React from 'react';
import firebase from 'firebase';     

export default class Comment extends React.Component {

    _removeComment(commentId, event){  
        event.preventDefault();

        if(confirm('Are you realy want to delete a comment?')){  
            firebase.database().ref().child('comments').child(commentId).remove()
        } 
    }

	render() {
		return (
			 <li className="comments-item">
                <h3>
                    {this.props.author}
                    <a href="#" onClick={this._removeComment.bind(this, this.props.id)}>delete</a>
                </h3>
                <p>{this.props.text}</p>  
             </li>
		)
	}
}