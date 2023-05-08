import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => {
      return (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      );
    })}
  </ul>
);
