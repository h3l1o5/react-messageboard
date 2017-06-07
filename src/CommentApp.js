import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  handleCommentSubmit = (comment) => {
    this.setState({comments: this.state.comments.concat(comment)})
    console.log(this.state.comments)
  }

  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp