import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Createmap from './Createmap';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Routes>

          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createmap" element={<Createmap />} />


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
