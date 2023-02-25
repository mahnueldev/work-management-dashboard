import React from 'react';
import ProjInfo from '../data/proj-info';

const status = {
  'in progress': (<div className='flex text-xl text-orange-200 justify-center bg-orange-100 px-4 w-2/3 rounded-md'>IN PROGRESS</div>),
  open: <div className='flex text-xl text-purple-200 justify-center bg-purple-100 px-4 w-1/3 rounded-md'>OPEN</div>,
  closed: <div className='flex text-xl text-red-200 justify-center bg-red-100 px-4 w-1/3 rounded-md'>CLOSED</div>,
 
};

const Table = () => {
  return (
    <table className='w-full text-left '>
      <thead className=' mb-2 '>
        <tr className='text-dark-100 text-2xl'>
          <th className='w-3/12 pl-4'>Recent Projects</th>
          <th className='w-2/12'>Created</th>
          <th className='w-2/12'>Reporter</th>
          <th className='w-2/12'>Due</th>
          <th className='w-2/12'>Stats</th>
        </tr>
      </thead>
      <tbody>
        {ProjInfo.map((project) => (
          <tr className='border-2 rounded text-2xl text-dark-300 ' key={project.id}>
            <td className='flex p-4  items-center ml-4 text-xl'>
              <img src={project.logo} alt='' className='w-8 rounded-2xl mr-4' />
              <p className='text-2xl'>{project.title}</p>
            </td>
            <td>{new Date(project.created).toLocaleDateString()}</td>
            <td>{project.reporter}</td>
            <td>{new Date(project.due).toLocaleDateString()}</td>
            <td>
              {project.stats.map((stat, index) => (
                <div key={index}>{status[stat]}</div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
