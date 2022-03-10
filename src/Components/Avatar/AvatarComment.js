import moment from 'moment';
import profile from "../../Assets/Icons/default pofile picture.png";

function AvatarComment(props) {
  const data = props.data;
  return (
    <div className='avatar-comment'>
      <img
        className='avatar-image'
        src={profile}
        alt='avatar user'
      />

      <div className='avatar-text'>
        <h4>{`${data.user.firstName} ${data.user.lastName}`}</h4>
        <p>{moment(data.user.createdAt).startOf('minutes').fromNow()}</p>
      </div>
    </div>
  );
}

export default AvatarComment;
