import React, { ChangeEvent } from 'react';
import './index.css';
import { Navigate, Outlet, Route, Routes, useNavigate, } from "react-router-dom";
import Home from './pages/Home';
import HomeAdmin from './pages/admin/HomeAdmin';
import Login from './components/login/Login';
import { Auth } from './elements/interface/Auth';
import HomeUser from './pages/user/HomeUser';
import ListPaslon from './components/list/ListPaslon';
import ListPartai from './components/list/ListPartai';
import Vote from './components/vote/Vote';
import Register from './components/login/Register';
import ModalVote from './components/vote/ModalVote';
import Partai from './pages/user/Partai';
import Paslon from './pages/user/Paslon';

const App: React.FC = () => {
  const navigate = useNavigate()
  const [isLoginAdmin, setIsLoginAdmin] = React.useState<boolean>(false)
  const [isLogin, setIsLogin] = React.useState<boolean>(false)
  const [form, setForm] = React.useState<Auth>({
    username: "",
    password: ""
  })

  function handleSetForm(event: ChangeEvent<HTMLInputElement>) : void {
    setForm({
      ...form, [event.target.name]: event.target.value
    })
  }
  
  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (form.username === "admin" && form.password === "root") {
      setIsLoginAdmin(true)
    } else if(form.username !== "" && form.password !== ""
    ) {
      setIsLogin(true)
    }
  }

  function PrivateRoute() {
    if (isLogin) {
      return<Outlet/>
    } else {
      return <Navigate to = "/login"/>
    }
  }

  function PrivateRouteAdmin() {
    if (isLoginAdmin) {
      return<Outlet/>
    } else {
      return <Navigate to = "/login"/>
    }
  }

  React.useEffect(() => {
    navigate('/home')
  }, [isLogin])
  
  React.useEffect(() => {
    navigate('/admin')
  }, [isLoginAdmin])

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/paslon' element={<ListPaslon/>}/>
        <Route path='/partai' element={<ListPartai/>}/>
        <Route path='/list-partai' element={<Partai/>}/>
        <Route path='/list-paslon' element={<Paslon/>}/>
        <Route path='/voting' element={<Vote/>}/>
        <Route path='/vote' element={<ModalVote/>}/>
        <Route path='/login' element={<Login handle={handleSetForm} login={login} />} />
        <Route path='/register' element={<Register />} />
        
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/home' element={<HomeUser/>} />
          <Route path='/list-partai' element={<Partai/>}/>
          <Route path='/list-paslon' element={<Paslon/>}/>
          <Route path='/voting' element={<Vote/>}/>
          <Route path='/vote' element={<ModalVote/>}/>
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='/' element={<PrivateRouteAdmin/>}>
          <Route path='/admin' element={<HomeAdmin/>} />
          <Route path='/paslon' element={<ListPaslon/>}/>
          <Route path='/partai' element={<ListPartai/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;