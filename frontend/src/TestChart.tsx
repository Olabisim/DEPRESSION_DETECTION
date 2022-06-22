import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Depressed', 'Not Depressed'],
  datasets: [
    {
      label: '# of Votes',
      data: [40, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function TestChart() {
  return (
                <>

                <div className='adjust_pie_chart'>
                  <Pie data={data} />

                  <h2 className='adjust_pie_chart_heading'>This pie chart is indicating the percentage level of a depressed person.</h2>
                  <h2 className='adjust_pie_chart_heading'>Moiet is 40% not depressed and 60% depressed as previewed in the chart above.</h2>
                </div>
                
                </>
        )
}
