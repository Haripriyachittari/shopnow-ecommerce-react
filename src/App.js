

import { BrowserRouter as Router ,Routes,Route,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ShopcontextProvider } from './context/Shopcontext';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Thankyou from './pages/Thankyou';

function App() {
  return (
    <div className="">
      <ShopcontextProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart'  element= {<Cart/>}/>
        <Route path ='/cart/thankyou' element={<Thankyou/>}/>
      </Routes>
      </Router>
      </ShopcontextProvider>
      
    </div>
  );
}

export default App;
