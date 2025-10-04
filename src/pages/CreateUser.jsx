// src/pages/CreateUser.jsx
import { UserForm } from '../components/UserForm';
import { useUsers } from '../hooks/useUsers';
import { useNavigate } from 'react-router-dom';

export const CreateUser = () => {
  const { createUser } = useUsers();
  const navigate = useNavigate();

  const handleSubmit = (user) => {
    createUser(user);
    navigate('/usuarios');
  };

  return (
    <div>
      <h1>Crear Usuario</h1>
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
};