import React, { Component } from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'

class CommentList extends Component {
  constructor() {
    super()
    this.state = {
      hintMessage: null
    }
  }

  componentDidMount() {
    if (this.props.comments.length == 0) {
      this.setState({hintMessage: 'No comment yet.'})
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments.length !== 0) {
      this.setState({hintMessage: null})
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.hintMessage}</h2>
        {this.props.comments.map((comment, i) => {
          return (
            <Card key={i} style={{marginTop: 20, marginBottom: 20, borderBottom: '1px solid #f1f1f1'}}>
              <CardHeader 
                titleStyle={{color: '#E91E63', fontSize: '15px'}}
                title={comment.username}
                subtitle='now' />
              <CardText style={{color: '#009688', fontSize: '20px', fontWeight: 'bold'}}>
                {comment.message}
              </CardText>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default CommentList
