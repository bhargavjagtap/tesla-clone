import {React, useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'
import Header from './Header'; 
import Menu from './Menu'; 
import Login from './Login';
import SignUp from './SignUp';
import TeslaAccount from './TeslaAccount';
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase';

function App() {
  console.log("hello");
  const user = useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(
          //User is signed in
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
          })
        )
      }else{
        //User is signed out
        dispatch(logout( ))
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route 
            exact 
            path='/' 
            element={<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          />
            {/* {isMenuOpen && <Menu />} */}
          {/* <Route element={<HeaderBlock />}/> */}
          <Route exact path='/login' element={user ? <Navigate to='/teslaaccount' /> : <Login/>} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/teslaaccount' element={!user ? (
              <Navigate to='/login' />
            ) : (
              <>
                <TeslaAccount
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}/>
        </Routes>
          {/* {user ? <Navigate to='/teslaaccount' /> : <Login/>} */}
      </div>
    </Router>
  );
}

export default App;
