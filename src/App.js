import { Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import Login from './component/Login';
import Nav from './component/Nav';
import RequireAuth from './component/PrivateAuth/RequireAuth';
import Register from './component/Register';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={ <RequireAuth>
          <Home/>
        </RequireAuth> }></Route>   
        <Route path='/home' element={ <RequireAuth>
          <Home/>
        </RequireAuth> }></Route>   
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/register' element={ <Register/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
