
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';


import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar,Doughnut, Pie } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Persistent depressed (low) mood', 'Loss of interest in things you once enjoyed', 'Feeling of worthlessness.', 'Poor concentration', 'Thought of harming yourself.', 'other'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Level',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#1d2949',
    }
  ],
};


export const data2 = {
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

export const ChartPage:React.FC = () => {

        return (
                <div>

{/* <div className='adjust_pie_chart'> */}
                        <Bar options={options} data={data} />
                          <div className='adjust_pie_chart'>
                            <Pie data={data2} />

                            <h2 className='adjust_pie_chart_heading'>This pie chart is indicating the percentage level of a depressed person.</h2>
                            <h2 className='adjust_pie_chart_heading'>Moiet is 40% not depressed and 60% depressed as previewed in the chart above.</h2>
                          </div>

                </div>
        )

}
