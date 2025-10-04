// src/components/UserList.jsx
import { UserItem } from './UserItem';

export const UserList = ({ users, onUpdate, onDelete }) => {
  return (
    <ul>
      {users.map(user => (
        <UserItem 
          key={user.id} 
          user={user} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};