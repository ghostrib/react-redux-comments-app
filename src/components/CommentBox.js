import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // call an action creator and save the comment
    this.setState({ comment: '' });
  };

  render() {
    const { comment } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>
        <h4>Leave A Comment</h4>
        <textarea onChange={handleChange} value={comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
