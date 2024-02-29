import React from 'react';
import logo from '../../assets/Logo-Dw.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // const [isLogin, setIsLogin] = React.useState<Boolean>(false)

  // const loggedIn = () : void => {
  //   setIsLogin(!isLogin)
  // }

  return (
    <div className='flex items-center justify-between bg-black py-2'>
      <div className='flex items-center mx-40'>
        <img className='w-9 h-9 mr-3' src={logo} alt="" />
        <span className='text-white font-semibold text-lg'>PEMILU PRESIDEN DUMBWAYS.ID</span>
      </div>
      <div className='text-white mx-40 font-light'>
        <ul className='flex items-center'>
          <li className='mx-6'>
            <Link to={'/list-partai'}>
             Partai
            </Link>
          </li>
            <span>|</span>
          <li className='mx-6'>
            <Link to={'/list-paslon'}>
              Paslon
            </Link>
          </li>
            <span>|</span>
          <li className='mx-6'>
            <Link to={'/voting'}>
              Voting
            </Link>
          </li>
          <li>
            <button className='bg-white text-black font-bold px-6 py-1 mx-1 rounded-md'>
              <Link to={'/login'}>
                LOGIN
              </Link>
            </button>
          </li>
          {/* {isLogin ? (
            <button className='text-black bg-white font-bold rounded-full w-9 h-9 flex items-center justify-center' onClick={loggedIn}>
            R 
            </button>) : (
            <button className='bg-white text-black font-bold px-6 py-1 mx-1 rounded-md' onClick={loggedIn}>
            LOGIN
            </button>) } */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;