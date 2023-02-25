import React from 'react';
import { Calendar } from 'antd';
import dayjs from 'dayjs';

const Calender = () => {
  const onPanelChange = (value, mode) => {
    console.log(dayjs(value).format('YYYY-MM-DD'), mode);
  };

  return <Calendar onPanelChange={onPanelChange} fullscreen={false} />;
};

export default Calender;
