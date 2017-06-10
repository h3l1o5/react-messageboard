/* reducer */
export default function(state, action) {
  if(!state) {
    state = {
      comments: []
    }
  }

  switch(action.type) {
    case 'INIT_COMMENTS':
      return {
        comments: action.comments
      }
    case 'ADD_COMMENT':
      return {
        comments: [...state.comments, action.comment]
      }
    case 'REMOVE_COMMENT':
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

/* action creators */
export const initComments = (comments) => {
  return {
    type: 'INIT_COMMENTS',
    comments
  }
}

export const addComment = (comment) => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const removeComment = (commentIndex) => {
  return {
    type: 'REMOVE_COMMENT',
    commentIndex
  }
}