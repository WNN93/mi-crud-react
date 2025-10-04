import { useState } from 'react';

export const useUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ana García', email: 'ana@example.com', city: 'Madrid' },
    { id: 2, name: 'Luis Martínez', email: 'luis@example.com', city: 'Barcelona' }
  ]);

  const createUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => user.id === id ? { ...updatedUser, id } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return {
    users,
    createUser,
    updateUser,
    deleteUser
  };
};