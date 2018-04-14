import React from 'react';
import firebase from 'firebase';    

export default class CommentsForm extends React.Component {

    _submitForm(event){
        event.preventDefault();

        if(this._author.value.length && this._text.value.length){
            let comment = {
                name: this._author.value,
                text: this._text.value  
            }  

            firebase.database().ref().child('comments').push(comment).then(() => {
                 this._author.value = '';
                 this._text.value = '';    
            })         
        }
    }

	render() {
		return (
			<form className="comments-form" onSubmit={this._submitForm.bind(this)}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" ref={input => this._author = input} />
                <label htmlFor="text">Comment</label>
                <textarea name="text" id="text"  ref={textarea => this._text = textarea} ></textarea>
                <input type="submit" value="post commit"/>
            </form>
		)
	}
}