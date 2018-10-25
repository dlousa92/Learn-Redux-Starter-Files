// increment
export function increment (index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment (postID, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postID,
    author,
    comment
  }
}

// delete comment
export function removeComment (postID, index) {
  return { type: 'REMOVE_COMMENT',
    postID,
    index
  }
}
