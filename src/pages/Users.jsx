// src/pages/Users.jsx
import { UserList } from '../components/UserList';
import { useUsers } from '../hooks/useUsers';

export const Users = () => {
  const { users, updateUser, deleteUser } = useUsers();

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <UserList 
        users={users} 
        onUpdate={updateUser} 
        onDelete={deleteUser} 
      />
    </div>
  );
};