import React from 'react';
import ProjInfo from '../data/proj-info';
import ProgressBar from './ProgressBar';
import Avatar from './Avatar';

const MemberCard = () => {
  return (
    <section className='flex items-center justify-center '>
      {ProjInfo.map((item, i) => {
        let bgClass;
        switch (i % 3) {
          case 0:
            bgClass = 'bg-green-100';
            break;
          case 1:
            bgClass = 'bg-orange-200';
            break;
          case 2:
            bgClass = 'bg-blue-200';
            break;
          default:
            bgClass = 'bg-gray-100';
            break;
        }
        let guageCol;
        switch (i % 3) {
          case 0:
            guageCol = 'bg-green-300';
            break;
          case 1:
            guageCol = 'bg-orange-300';
            break;
          case 2:
            guageCol = 'bg-purple-200';
            break;
          default:
            guageCol = 'bg-light-300';
            break;
        }
        return (
          <>
            <ul
              className={`w-40 h-60 flex flex-col justify-center ${bgClass} rounded-[20px] ml-4`}
            >
              <img  src={item.logo} alt='' className=' ml-4 mb-14 w-10 rounded-full'/>
              <li key={i} className='flex flex-col text-red-300 text-sm ml-2'>
                <p className='text-dark-300 text-md'>Team members</p>
                <Avatar
                  images={item.team.map((member) => member.image)}
                  size={8}
                  max={3}
                  extrabg='#ffff'
                />
              </li>
              <div className='mt-10 '>
                <p className='text-sm mb-1 ml-2'>Project completion</p>
                <div className='px-2'>
                  <ProgressBar value={item.value} BarCol={`${guageCol}`} />
                </div>
              </div>
            </ul>
          </>
        );
      })}
    </section>
  );
};

export default MemberCard;
