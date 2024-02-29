import React from 'react';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
    return(
      <div className='bg-gray-300 py-10'>
        <div className='container w-96 mx-auto my-20'>
        <form className="bg-white shadow-md rounded-xl px-8 pt-8 pb-8 mb-4">
        <h1 className='text-center font-extrabold text-3xl' style={{ color: '#5E5400' }}>REGISTER</h1>
    <div className="mb-4 mt-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='fullname'>
        Fullname
      </label>
      <input className="shadow outline outline-1 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700"
      name='fullname' 
      id="fullname" 
      type="text"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='address'>
        Address
      </label>
      <input className="shadow outline outline-1 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700"
      name='address' 
      id="address" 
      type="text"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='gender'>
        Gender
      </label>
      <input className="shadow outline outline-1 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700"
      name='gender' 
      id="gender" 
      type="text"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='username'>
        Username
      </label>
      <input className="shadow outline outline-1 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700" 
      name='username' 
      id="username" type="text"/>
    </div>
    <div className="mb-8">
      <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor='password'>
        Password
      </label>
      <input className="shadow outline outline-1 outline-gray-500 rounded-lg w-full py-2 px-3 text-gray-700"
      name='password' 
      id="password" 
      type="text"/>
    </div>
    <div className="container flex-col items-center justify-center">
      <button className="w-80 text-white font-semibold py-1.5 px-2 rounded-lg focus:outline-none focus:shadow-outline text-lg" 
      style={{ backgroundColor: '#5E5400' }} type="button">
        SUBMIT
      </button>
      <div className='flex items-center mt-4 mx-auto justify-center'>
      <p className="text-grey-700 text-xs italic mr-1">Sudah memiliki akun ?</p>
      <Link to={'/login'} className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 italic">
        Login
      </Link>
      </div>
    </div>
  </form>
        </div>
        </div>
    )
}

export default Register;