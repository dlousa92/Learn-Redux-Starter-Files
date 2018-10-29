import React from 'react'
import { addComment } from '../actions/actionCreator';

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

  handleSubmit (e) {
    e.preventDefault()
    console.log('submitting form')
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
  },

  render () {
    return (
      <div class='comments'>
        {this.props.postComments.map(this.renderCommment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit}>
          <input type='text' ref='author' placeholder='author' />
          <input type='text' ref='comment' placeholder='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
})

export default Comment
