import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Navbar from './Components/Navbar'; 
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
