import React, { useState, useEffect } from 'react';
import {RiArrowUpSFill} from 'react-icons/ri'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const [showMonthly, setShowMonthly] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleShowMonthly();
  };
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        '22',
        '6',
        '11',
        '9',
        '13',
        '17',
        '202',
        '422',
        '4',
        '20',
        '14',
        '15',
        '22',
        '11',
        '9',
        '13',
      ],
      datasets: [
        {
          label: 'dataset',
          data: [
            97, 363, 102, 120, 428, 62, 202, 422, 204, 104, 120, 300, 363, 102,
            120,
          ],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: '#9FA2FF',
          borderRadius: 100,
          barThickness: 10,
          hoverBackgroundColor: '#E7E5FC',
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
        },
      },
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    });
  }, []);

  const toggleShowMonthly = () => {
    setShowMonthly(!showMonthly);
  };
  return (
    <section className='border p-4 h-6/12 w-4/12 '>
      <div className='flex w-full justify-between'>
        <div>
          <h3 className=''>MONTHLY STATS</h3>
          <div className='flex'>
            <p className='text-3xl'>124</p>
            <RiArrowUpSFill className='text-green-300 text-4xl'/>
          </div>
        </div>
        <section className='flex justify-center items-center w-2/6 space-x-2 text-sm'>
          <label
            className={`w-3/6 flex items-center justify-center p-1 rounded-md ${
              selectedOption === 'monthly'
                ? 'bg-purple-200 text-white'
                : 'bg-purple-100 text-black'
            }`}
            onClick={() => handleOptionSelect('monthly')}
          >
            Monthly
          </label>
          <label
            className={`w-3/6 flex items-center justify-center p-1 rounded-md ${
              selectedOption === 'weekly'
                ? 'bg-purple-200 text-white'
                : 'bg-purple-100 text-black'
            }`}
            onClick={() => handleOptionSelect('weekly')}
          >
            Weekly
          </label>
        </section>
      </div>
      {showMonthly ? (
        <Bar options={chartOptions} data={chartData} />
      ) : (
        <p>hey</p>
      )}
    </section>
  );
};

export default BarChart;
