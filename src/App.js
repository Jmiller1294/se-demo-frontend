import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FireProducts from './pages/FireProducts';
import PoliceProducts from './pages/PoliceProducts';
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';
import Moderator from './pages/Moderator';
import Tasers from './pages/Tasers';
import Vests from './pages/Vests';
import Visors from './pages/Visors';
import Jackets from './pages/Jackets';
import Helmets from './pages/Helmets';
import Goggles from './pages/Goggles';
import NavBar from './layout/NavBar';
import TopHeader from './layout/TopHeader';

const App = () => {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/admin-login' element={<AdminLogin />} />
        <Route exact path='/admin' element={<Admin />} />
        <Route exact path='/moderator' element={<Moderator />} />
        <Route exact path='/fire-products' element={<FireProducts />} />
        <Route exact path='/police-products' element={<PoliceProducts />} />
        <Route exact path='/police-products/tasers' element={<Tasers />} />
        <Route exact path='/police-products/visors' element={<Visors />} />
        <Route exact path='/police-products/vests' element={<Vests />} />
        <Route exact path='/fire-products/jackets' element={<Jackets />} />
        <Route exact path='/fire-products/helmets' element={<Helmets />} />
        <Route exact path='/fire-products/goggles' element={<Goggles />} />
      </Routes>
    </>
  );
}

export default App;
