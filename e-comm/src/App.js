import './App.css';
import Nav from "./components/Nav.js";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import  Footer from "./components/Footer.js";
import SignUp from "./components/SignUp";
import Privatecom from './Privatecom';
import Login from './components/Login';
import Addproduct from './components/Addproduct';
import ProductList from './components/ProductList';
import Updateproduct from './components/Updateproduct';
function App() {
  return (
    <div className='container'>
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

     <Route element={<Privatecom/>}>
    <Route path="/" element={<ProductList/>} />
    <Route path="/add" element={<Addproduct/>} />
    <Route path="/update/:id" element={<Updateproduct/>} />
    <Route path="/logout" element={<h1>Logout</h1>} />
    </Route>

    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login />} />
      </Routes>
     </BrowserRouter>
     <Footer /> 
    </div>
    </div>
  );
}

export default App;
