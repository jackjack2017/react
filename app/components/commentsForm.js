import React from 'react';

export default class CommentsForm extends React.Component {
	render() {
		return (
			<form className="comments-form">
                <label for="name">Name</label>
                <input type="text" id="name" name="name"/>
                <label for="text">Comment</label>
                <textarea name="text" id="text"></textarea>
                <input type="submit" value="post commit"/>
            </form>
		)
	}
}