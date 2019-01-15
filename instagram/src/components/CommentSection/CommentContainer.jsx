import React, { Component } from 'react';
import PropTypes from 'prop-types';

import dummyData from '../../dummy-data';

import './CommentContainer.css';
import Comments from './Comments';
import MetricsDisplay from './MetricsDisplay';
import AddComment from './AddComment';

// convert this to a class, store comments in state
// add methods to handleChange (ie add text in value to state)
// add method to handle submit (ie add value (comment) and logged in username to array of comments)

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      likes: 0,
      timestamp: '',
      name: 'currentComment',
      currentComment: ''
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
      likes: this.props.likes,
      timestamp: this.props.timestamp
    });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newComments = [
      ...this.state.comments,
      { username: 'test user', text: this.state.currentComment }
    ];
    this.setState({ comments: newComments, currentComment: '' });
  };

  render() {
    const createCommentComponents = this.state.comments.map((item, index) => {
      return (
        <Comments
          commentUsername={item.username}
          comment={item.text}
          key={index}
        />
      );
    });

    return (
      <div className="comment-container">
        <MetricsDisplay likes={this.state.likes} />
        {createCommentComponents}
        <AddComment
          currentComment={this.state.currentComment}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

// const CommentContainer = props => {
//   const createCommentComponents = props.comments.map((item, index) => {
//     return (
//       <Comments username={item.username} key={index} comment={item.text} />
//     );
//   });

//   return (
//     <div className="comment-container">
//       <MetricsDisplay likes={props.likes} />
//       {createCommentComponents}
//       <AddComment />
//     </div>
//   );
// };

CommentContainer.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.array,
  timestamp: PropTypes.string
};

export default CommentContainer;
