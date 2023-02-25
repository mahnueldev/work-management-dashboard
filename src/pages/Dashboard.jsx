
import React from 'react';
import { CalenderComp } from '../components';
import { CardSect, ChartSect, TableSect } from '../layouts';

const Dashboard = () => {
  return (
    <section className='  flex p-10 mt-10 '>
      <div className='hide-scroll overflow-y-scroll h-screen flex flex-col'>
        <CardSect />
        <div className='mt-12'></div>
        <TableSect />
        <div className='mt-16 mb-8'>
          <h1>PROJECT OVERVIEW</h1>
          <ChartSect />
        </div>
      </div>
      <div className='w-1/4 ml-8'>
        <CalenderComp/>
      </div>
    </section>
  );
};

export default Dashboard;
