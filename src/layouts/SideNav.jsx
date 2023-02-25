import React from 'react';
import { useLocation } from 'react-router-dom';
import menuArray from '../data/side-menu-data';
import { IoLogoApple } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SideNav = () => {
  const location = useLocation();

  return (
    <section className='bg-light-100 w-16 flex-col justify-center fixed h-screen border-r-2 border-light-300'>
      <span className='flex justify-center text-3xl mt-2 h-2/6'>
        <IoLogoApple />
      </span>
      <div className='flex justify-center items-center'>
        <ul className=''>
          {menuArray.map((item, i) => {
            const currentLink = location.pathname === item.to;
            return (
              <li key={i} className='mb-8'>
                <Link 
                  className={`text-red-300 ${
                    currentLink ? 'active:text-red-300' : 'text-red_alt-100'
                  }`}
                  to={item.to}
                >
                  <span className='text-3xl'>{item.icon}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideNav;
