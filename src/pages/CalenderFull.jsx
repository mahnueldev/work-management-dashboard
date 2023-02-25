import React from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';

const CalenderFull = () => {
  const onPanelChange = (value, mode) => {
    console.log(dayjs(value).format('YYYY-MM-DD'), mode);
  };

  return (
    <section className='  flex p-4 mt-8 '>
      <Calendar
        onPanelChange={onPanelChange}
      />
    </section>
  );
};

export default CalenderFull;
