import React, { Fragment } from 'react';
import add from '../data/add-project';


const AddProj = () => {
  return (
    <section>
      {add.map((item) => {
        return (
          <Fragment>
            <div className='w-2/3'>
              <h1 className='text-3xl text-dark-600'>{item.title}</h1>
              <p className='text-dark-100 text-xl mt-2'>{item.desc}</p>
            </div>
            <div className='flex items-center mt-4 space-x-2'>
              <span className='text-red-300 text-4xl'>{item.icon}</span>
              <p className='text-xl text-red-300'>{item.text.toUpperCase()}</p>
            </div>
          </Fragment>
        );
      })}
    </section>
  );
};

export default AddProj;
