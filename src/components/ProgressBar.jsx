import React from 'react';

const ProgressBar = ({ value, BarCol }) => {
  const progressBarStyle = 'bg-blue-400 h-1 rounded-md';
  const progressBarStyleUnderlay = 'bg-light-100 h-1 rounded-md';
  const progressBarContainerStyle = 'relative w-full h-2';

  return (
    <div className='w-full '>
      <div className={progressBarContainerStyle}>
        <div
          className={`${progressBarStyle} ${BarCol}`}
          style={{ width: `${value}%`, position: 'absolute', zIndex: '1' }}
        ></div>
        <div
          className={progressBarStyleUnderlay}
          style={{ width: '100%', position: 'absolute', zIndex: '0' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
