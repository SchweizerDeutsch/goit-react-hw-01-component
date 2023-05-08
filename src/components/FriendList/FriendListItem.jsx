import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li className={css.item} key={id}>
    <span className={isOnline ? css.online : css.offline}>{isOnline}</span>
    <img className={css.img} src={avatar} alt="Your friend" width={40} />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
