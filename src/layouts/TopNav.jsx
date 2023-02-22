import React,{Fragment} from 'react';
import { useLocation } from 'react-router-dom';
import topMenuArray from '../data/top-menu-data';
import user from '../data/user';

const SideNav = () => {
  const location = useLocation();

  return (
    <section className='bg-light-100 fixed flex flex-row  justify-between h-12 w-screen border-b-2 border-light-300 z-10 top-0 left-16'>
      <div>
        <ul className='flex flex-row items-center h-12'>
          {topMenuArray.map((item, i) => {
            const currentLink = location.pathname === item.to;
            return (
              <li key={i} className='mr-8 flex-row first:ml-8'>
                <a
                  className={`text-red-300 ${
                    currentLink ? 'active:text-red-300 ' : 'text-dark-200'
                  }`}
                  href={item.to}
                >
                  <p className=''>{item.label}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex mr-32 items-center '>
        {user.map((item, i) => {
          return (
            <Fragment>
            <div className='mr-4 '>
                <h2 className='text-dark-400 text-2xl'>{item.firstname} {''} {item.surname}</h2>  
            <p className='text-xs text-dark-100 text-xl'>{item.occupation}</p>
            </div>
            <img src={item.image} alt='' className='w-8 h-8 rounded-full bg-cover' />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default SideNav;
