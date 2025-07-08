import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

export default function LushaApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
