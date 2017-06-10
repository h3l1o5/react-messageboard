import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.any,
    onSubmit: PropTypes.func,
    onUsernameBlur: PropTypes.func
  }

  static defaultProps = {
    username: ''
  }

  constructor(props) {
    super(props)
    this.state = {
      username: props.username,
      message: '',
      usernameErrorPrompt: '',
      messageErrorPrompt: ''
    }
  }

  componentDidMount() {
    if (!this.state.username) {
      this.usernameField.focus()
    } else {
      this.commentField.focus()
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value })
  }

  handleUsernameBlur = (e) => {
    if(this.props.onUsernameBlur) {
      this.props.onUsernameBlur(e.target.value)
    }
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
      this.props.onSubmit({
        username,
        message,
        createdTime: Date.now()
      })
      this.setState({ message: '' })
      this.commentField.focus()
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