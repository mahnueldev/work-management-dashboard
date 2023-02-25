import React, { useState, useEffect } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  Title,
  Tooltip
);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['red', 'green', 'blue'],
      datasets: [
        {
          label: 'dataset',
          data: [200, 134, 45, 70, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(23, 239, 117)',
            'rgb(233, 48, 199)',
          ],
          hoverOffset: 50,

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

          grid: {
            display: false,
          },
        },
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
      },
    });
  }, []);

  return (
    <section className='border p-4 w-5/6 '>
      <div>
        <div>
          <h3 className=''>PENDING TASKS</h3>
          <div className='flex'>
            <p className='text-3xl'>23</p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-center '>
        <div className='w-4/5 flex flex-col items-center '>
          <Doughnut options={chartOptions} data={chartData} />
        </div>
      </div>
    </section>
  );
};

export default DoughnutChart;
