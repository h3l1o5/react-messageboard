import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp.js'
import commentsReducer from './reducers/comments'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './index.css'

injectTapEventPlugin()
const store = createStore(commentsReducer)

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
        <MuiThemeProvider>
          <Provider store={store}>
            <div className='wrapper'>
              <CommentApp />
            </div>
          </Provider>
        </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
