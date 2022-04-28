import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Home from './components/Pages/Home/Home/Home';
import ServiceDetails from './components/Pages/Home/ServiceDetails/ServiceDetails';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import CheckOut from './components/Pages/CheckOut/CheckOut'
import RequireAuth from './components/Pages/Login/RequireAuth/RequireAuth';
function App() {
  return (
    <div >
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={
          <RequireAuth><CheckOut></CheckOut></RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>

    </div >
  );
}

export default App;
