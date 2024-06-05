
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Singup from './assets/Pages/Singup'
import Login from './assets/Pages/Login'
import Home from './assets/Pages/Home'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/singup' element={<Singup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home/>}></Route>
           
              </Routes>
            </BrowserRouter>
          </>
          )
}

          export default App
