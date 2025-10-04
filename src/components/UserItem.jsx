// src/components/UserItem.jsx
import { useState } from 'react';

export const UserItem = ({ user, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(user.id, form);
    setIsEditing(false);
  };

  return (
    <li style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="email" value={form.email} onChange={handleChange} />
          <input name="city" value={form.city} onChange={handleChange} />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancelar</button>
        </form>
      ) : (
        <>
          <strong>{user.name}</strong> - {user.email} - {user.city}
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={() => onDelete(user.id)}>Eliminar</button>
        </>
      )}
    </li>
  );
};