import React, { useState, useEffect } from 'react';
import {RiArrowUpSFill} from 'react-icons/ri'
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale, LinearScale, LineElement, PointElement,Title, Tooltip);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['22', '6', '11', '9', '45'],
      datasets: [
        {
          label: 'dataset',
          data: [74, 80, 143, 120, 200],
          borderColor: '#46B75F',
          backgroundColor: '#46B75F',
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
          
          grid: {
            display: true,
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

  return (
    <section className='border p-4 w-5/6  '>
         <div>
        <div>
          <h3 className=''>PROJECT VIEWS</h3>
          <div className='flex'>
            <p className='text-3xl'>42</p>
            <RiArrowUpSFill className='text-green-300 text-4xl'/>
          </div>
        </div>
        </div>

        <div className='mt-16'>

      <Line options={chartOptions} data={chartData} />
        </div>
       

    </section>
  );
};

export default LineChart;
