import React from 'react';
import AvatarComment from '../Avatar/AvatarComment';

function UserComment(props) {
  const data = props.data;
  return (
    <div className='user-comment'>
      <AvatarComment data={data} />
      <p className='this-comment'>{data.comment}</p>
    </div>
  );
}

export default UserComment;
