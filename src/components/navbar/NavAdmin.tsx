import React from 'react';
import logo from '../../assets/Logo-Dw.png';
import { Link } from 'react-router-dom';

const Navboard: React.FC = () => {
  return (
    <div className='flex items-center justify-between bg-black py-2'>
      <div className='flex items-center mx-40'>
        <img className='w-9 h-9 mr-3' src={logo} alt="" />
        <span className='text-white font-semibold text-lg'>
          <Link to={'/admin'}> 
          DASHBOARD PEMILU
          </Link>
          </span>
      </div>
      <div className='text-white mx-40 font-light'>
        <ul className='flex items-center'>
        <li className='mx-6'>
          <Link to={'/partai'}>
          Partai
          </Link>
          </li>
        <span>|</span>
        <li className='mr-8 ml-6'>
          <Link to={'/paslon'}>
          Paslon
          </Link>
        </li>
          <button className='text-black bg-white font-bold rounded-full w-9 h-9 flex items-center justify-center'>
            <Link to={'/login'}>
                A
            </Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navboard;