import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { CreateUser } from './pages/CreateUser';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Inicio</Link>
        <Link to="/usuarios" style={{ marginRight: '10px' }}>Usuarios</Link>
        <Link to="/crear">Crear Usuario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/crear" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;