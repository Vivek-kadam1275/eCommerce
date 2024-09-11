 import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';
 
function App() {
  
  return (
      <div>
        <Toaster/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
        </Routes>
      </div>
  );
}

export default App;
