import defaultPic from "../../img/default-img.jpg";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className="item" key={id}>
    <span className="status" width="10" height="10">
      {isOnline}
    </span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultPic,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
