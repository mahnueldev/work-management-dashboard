import React from 'react';
import { CardSect, ChartSect, TableSect } from '../layouts';

const Dashboard = () => {
  return (
    <section className='overflow-y-scroll h-screen flex p-10 mt-10 flex-col'>
      <CardSect />
      <div className='mt-12'></div>
      <TableSect />
      <ChartSect/>
    </section>
  );
};

export default Dashboard;
