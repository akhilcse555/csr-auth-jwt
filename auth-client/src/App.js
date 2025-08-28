import Signup from "../src/components/Signup";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/components/Login'

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Signup />} /> {/* default route to signup */}
    </Routes>
  );
}

export default App;
