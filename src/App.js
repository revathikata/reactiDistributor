import './App.css';
import vector1 from'./assets/Vector 3.svg'
import logo from'./assets/Mask group.svg'
import vector2 from'./assets/Vector 4.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../src/components/login/login.tsx';
import Register from './components/register/register.jsx';
function App() {
  return (
    <div className="App">
       <div className="container row">
      <div className="col">
        <div className='left-section'>
      <div className="vector3">
      <img src={vector1} alt="Vector2" />
      </div>
      <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="vector4">
    <img src={vector2} alt="Vector2" />
    </div>
      </div>
      </div>
      <div className="col backr"> 
       <div className='right-section'>
       <div className='all-pages'>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
       </div>
       </div>
      </div>
    </div>
    </div>
  );
}

export default App;
