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

  componentWillMount() {
    this._loadUsername()
  }

  componentDidMount() {
    if (!this.state.username) {
      this.usernameField.focus()
    } else {
      this.commentField.focus()
    }
  }

  _saveUsername = (username) => {
    localStorage.setItem('username', username)
  }

  _loadUsername = () => {
    const username = localStorage.getItem('username')
    if (username) {
      this.setState({username: username})
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleUsernameBlur = (e) => {
    this._saveUsername(e.target.value)
  }

  handleCommentChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = () => {
    if (!this.state.username) {
      this.setState({usernameErrorPrompt: 'username can not be empty.'})
      return
    } else {
      if (this.state.usernameErrorPrompt) {
        this.setState({usernameErrorPrompt: ''})
      }
    }

    if (!this.state.message) {
      this.setState({messageErrorPrompt: 'message can not be empty.'})
      return
    } else {
      if (this.state.messageErrorPrompt) {
        this.setState({messageErrorPrompt: ''})
      }
    }

    if (this.props.onSubmit) {
      const { username, message } = this.state
      this.commentField.focus()
      this.props.onSubmit({
        username,
        message,
        createdTime: Date.now()
      })
      this.setState({ message: '' })
    }
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
              onChange={this.handleUsernameChange}
              onBlur={this.handleUsernameBlur}
              ref={(usernameField) => this.usernameField = usernameField} />
          </div>
        </div>
        <div className='comment-field'>
          <div className='comment-field-input'>
            <TextField 
              hintText="message" 
              floatingLabelText='multi-line textarea'
              multiLine={true} 
              value={this.state.message}
              errorText={this.state.messageErrorPrompt} 
              onChange={this.handleCommentChange} 
              style={{width: '80%'}}
              ref={(commentField) => this.commentField = commentField} /> 
          </div>
        </div>
        <div className='comment-field-button' style={{left: '88%', position: 'relative'}}>
          <RaisedButton label='Submit' primary={true} onClick={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default CommentInput