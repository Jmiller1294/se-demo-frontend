import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import FireProducts from './pages/FireProducts';
import PoliceProducts from './pages/PoliceProducts';
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
        <Route exact path='/fire-products' element={<FireProducts />} />
        <Route exact path='/police-products' element={<PoliceProducts />} />
      </Routes>
    </>
  );
}

export default App;
