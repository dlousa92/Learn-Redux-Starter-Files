import React from 'react'

const Comment = React.createClass({
  renderCommment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>
      </div>
    )
  },

  render () {
    return (
      <div class='comments'>
        {this.props.postComments.map(this.renderCommment)}
        <form ref='commentForm' className='comment-form'>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='commment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
})

export default Comment
