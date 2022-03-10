import React from 'react';
import UserComment from './UserComment';

function CommentList(props) {
  const comments = props.data;

  return (
    <div className='user-comment'>
      <h4 className='title'>Comments</h4>
      {comments &&
        comments.map((comment, idx) => {
          return (
            <UserComment
              key={`${comment.userId}-${comment.user.createdAt}-${idx}`}
              data={comment}
            />
          );
        })}
    </div>
  );
}

export default CommentList;
