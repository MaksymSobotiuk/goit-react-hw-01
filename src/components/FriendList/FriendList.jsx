import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';




const FriendList = ({ friends }) => {
    return (

        <ul className={css.frnList}>
            {friends.map((friend) => {
                return (
                    <li className={css.frnItem} key={friend.id} >
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                );
            })}
        </ul>
    );

};

export default FriendList