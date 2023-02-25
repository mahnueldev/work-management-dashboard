import React from 'react'
import { BarChart, DoughnutChart, LineChart } from '../components'


const ChartSect = () => {
  return (
    <section className='flex mt-4 space-x-5 w-full'>
<BarChart/>
<LineChart/>
<DoughnutChart/>
    </section>
  )
}

export default ChartSect