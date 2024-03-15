import React from "react";
import { Link } from "react-router-dom";

interface handleAuth {
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void
  login: (e: React.FormEvent<HTMLFormElement>) => void
}

function Login (props: handleAuth) {

    return(
      <div className='bg-gray-300 py-14'>
        <div className='container w-96 mx-auto my-20'>
        <form className="bg-white shadow-md rounded-xl px-8 pt-8 pb-8 mb-4" 
        onSubmit={(e) => props.login(e)}>
        <h1 className='text-center font-extrabold text-3xl' style={{ color: '#5E5400' }}>LOGIN</h1>
    <div className="mb-4 mt-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='username'>
        Username
      </label>
      <input className="shadow outline outline-2 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700"
      name='username' 
      id="username" 
      type="text" 
      placeholder="Username"
      autoComplete="username"
      onChange={props.handle}  />
    </div>
    <div className="mb-6">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='password'>
        Password
      </label>
      <input className="shadow outline outline-2 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3" 
      name='password' 
      id="password" 
      type='password' 
      placeholder="******************" 
      autoComplete="current-password"
      onChange={props.handle}/>
    </div>
    <div className="container flex-col items-center justify-center">
      <button className="w-80 text-white font-bold py-1.5 px-4 rounded-lg focus:outline-none focus:shadow-outline" 
      style={{ backgroundColor: '#5E5400' }} type="submit">
        SUBMIT
      </button>
      <div className='flex items-center mt-4 mx-auto justify-center'>
      <p className="text-grey-700 text-xs italic mr-1">Belum memiliki akun ?</p>
      <Link to={'/register'} className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 italic">
        Register
      </Link>
      </div>
    </div>
  </form>
        </div>
        </div>
    )
}

export default Login;