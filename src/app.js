import StickyFooter from './components/footer';
import Album from './components/Album';
import SignInSide from './components/SignInSide';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
          
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Routes>
            <Route path='/' element={<Album/>} />
            <Route path='/login' element={<SignInSide/>} />
             </Routes> 
          </div>
          <StickyFooter />
        </BrowserRouter>
        
      );
}
export default App;