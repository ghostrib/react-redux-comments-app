import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
  displayComments = () => {
    const { comments } = this.props;
    return comments.map((comment, i) => {
      return <li key={i}>{comment}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>{this.displayComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return { comments };
};

export default connect(mapStateToProps)(CommentList);
