import React, { Component } from 'react'
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

class Comment extends Component {
  
  handleRemove = () => {
    if (this.props.onCommentRemove) {
      this.props.onCommentRemove(this.props.index)
    }
  }

  render() {
    return (
      <Card style={{marginTop: 20, marginBottom: 20, borderBottom: '1px solid #f1f1f1'}}>
        <CardHeader 
          titleStyle={{color: '#E91E63', fontSize: '15px'}}
          title={this.props.comment.username}
          subtitle='now' />
        <CardText style={{color: '#009688', fontSize: '20px', fontWeight: 'bold'}}>
          <p dangerouslySetInnerHTML={{__html: this.props.comment.message.replace(/\n/g, '<br />')}} />
        </CardText>
        <CardActions style={{position: 'relative', left: '88%'}}> 
          <FlatButton label='remove' onTouchTap={this.handleRemove}/>
        </CardActions>
      </Card>
    )
  }
}

export default Comment