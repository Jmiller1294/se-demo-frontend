import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
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
      </Routes>
    </>
  );
}

export default App;
