import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo-Dw.png';

const Navbar: React.FC = () => {
  return (
    <div className='flex items-center justify-between bg-black py-2'>
      <div className='flex items-center mx-40'>
        <img className='w-9 h-9 mr-3' src={logo} alt="" />
        <span className='text-white font-semibold text-lg'>
            <Link to={'/home'}>
            PEMILU PRESIDEN DUMBWAYS.ID
            </Link>
        </span>
      </div>
      <div className='text-white mx-40 font-light'>
        <ul className='flex items-center'>
          <li className='mx-6'>
            <Link to="/list-partai">
              Partai
            </Link>
          </li>
          <span>|</span>
          <li className='mx-6'>
            <Link to="/list-paslon">
              Paslon
            </Link>
          </li>
          <span>|</span>
          <li className='mx-6'>
            <Link to="/voting">
              Voting
            </Link>
          </li>
          <li>
            <button className='text-black bg-white font-bold rounded-full w-9 h-9 flex items-center justify-center'>
              <Link to='/login'>
                R
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;