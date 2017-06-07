import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp.js'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'

injectTapEventPlugin()

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className='wrapper'>
          <CommentApp />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))