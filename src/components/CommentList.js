import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      hintMessage: null
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments.length !== 0) {
      this.setState({hintMessage: null})
    }
    if (nextProps.comments.length == 0) {
      this.setState({hintMessage: 'No comment yet.'})
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.hintMessage}</h2>
        {this.props.comments.map((comment, i) => {
          return (
            <Comment 
              key={i}
              onRemoveComment={this.props.onRemoveComment}
              index={i}
              comment={comment}
            />
          )
        })}
      </div>
    )
  }
}

export default CommentList
