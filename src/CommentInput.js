import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      message: '',
      usernameErrorPrompt: '',
      messageErrorPrompt: ''
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleCommentChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = () => {
    if (this.state.username === '') {
      this.setState({usernameErrorPrompt: 'username can not be empty.'})
      return
    } else {
      this.setState({usernameErrorPrompt: ''})
    }

    if (this.state.message === '') {
      this.setState({messageErrorPrompt: 'message can not be empty.'})
      return
    } else {
      this.setState({messageErrorPrompt: ''})
    }

    if (this.props.onSubmit) {
      const { username, message } = this.state
      this.props.onSubmit({username, message})
    }

    this.setState({ message: '', usernameErrorPrompt: '', messageErrorPrompt: '' })
  }

  render() {
    return (
      <div className='comment-input' style={{border: '1px solid #f1f1f1', padding: 10}}>
        <div className='comment-field'>
          <div className='comment-field-input'>
            <TextField 
              hintText="User Name" 
              floatingLabelText='You are?' 
              value={this.state.username}
              errorText={this.state.usernameErrorPrompt}
              onChange={this.handleUsernameChange} />
          </div>
        </div>
        <div className='comment-field'>
          <div className='comment-field-input'>
            <TextField 
              hintText="comment" 
              multiLine={true} 
              value={this.state.message}
              errorText={this.state.messageErrorPrompt} 
              onChange={this.handleCommentChange} /> 
          </div>
        </div>
        <div className='comment-field-button' style={{left: '80%', position: 'relative'}}>
          <RaisedButton label='Submit' primary={true} onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default CommentInput