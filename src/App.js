import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Blogs from './pages/Blogs/Blogs';
import AddBlog from './pages/Blogs/AddBlog';
import RequireAuth from './pages/Login/RequireAuth';
import Users from './pages/Home/Users';
import MyBlog from './pages/Blogs/MyBlog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Blogs></Blogs>}></Route>
        <Route path='/addBlog' element={<RequireAuth><AddBlog></AddBlog></RequireAuth>}></Route>
        <Route path='/user' element={<RequireAuth><Users></Users></RequireAuth>}></Route>
        <Route path='/myBlog' element={<RequireAuth><MyBlog></MyBlog></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
