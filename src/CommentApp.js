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

  componentDidMount() {
    this._loadComments()
  }

  _loadComments = () => {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({comments: comments})   
    }
  }

  _saveComments = (comment) => {
    localStorage.setItem('comments', JSON.stringify(this.state.comments))
  }

  handleCommentSubmit = (comment) => {
    const comments = this.state.comments
    comments.push(comment)
    this.setState({comments: comments}, () => {
      this._saveComments(this.state.comments)
    })
  }

  handleCommentRemove = (index) => {
    console.log(index)
    this.setState({comment: this.state.comments.splice(index, 1)}, () => {
      this._saveComments(this.state.comments)
    })
  }

  render() {
    return (
      <div>
        <CommentInput onSubmit={this.handleCommentSubmit}/>
        <CommentList comments={this.state.comments} onCommentRemove={this.handleCommentRemove}/>
      </div>
    )
  }
}

export default CommentApp