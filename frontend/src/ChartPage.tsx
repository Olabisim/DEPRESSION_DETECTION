
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';


import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
// import { Bar,Doughnut, Pie } from 'react-chartjs-2';
import { QuestionDataContext } from './App';
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


  
        // question1value: question1State + question1bState + question1cState,
        // question2value: question2State + question2bState + question2cState, 
        // question3value: question3State + question3bState + question3cState, 
        // question4value: question4State + question4bState + question4cState,
        // question5value: question5State + question5bState + question5cState

        const {dataSetter} = useContext(QuestionDataContext)

        let question1value:number = Number(dataSetter.question1value)
        let question2value:number = Number(dataSetter.question2value)
        let question3value:number = Number(dataSetter.question3value)
        let question4value:number = Number(dataSetter.question4value)
        let question5value:number = Number(dataSetter.question5value)

        let remainingValue = Number(100 - (question1value + question2value + question3value + question4value + question5value ))
        let remaining_remainingValue = 100 - remainingValue

        console.log("dataSetter")
        console.log(dataSetter)

        console.log(question1value)
        console.log(question2value)
        console.log(question3value)
        console.log(question4value)
        console.log(question5value)
        console.log(remainingValue)
        console.log(remaining_remainingValue)

        

      const data = {
        labels,
        datasets: [
          {
            label: 'Level',
            data: [question1value, question2value, question3value, question4value, question5value, remainingValue],
            backgroundColor: '#1d2949',
          }
        ],
      };


      const data2 = {
        labels: ['Depressed', 'Not Depressed'],
        datasets: [
          {
            label: '# of Votes',
            data: [remainingValue, remaining_remainingValue],
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

  

        return (
                <div>

{/* <div className='adjust_pie_chart'> */}
                        <Bar options={options} data={data} />
                          <div className='adjust_pie_chart'>
                            <Pie data={data2} />

                            <h2 className='adjust_pie_chart_heading'>This pie chart is indicating the percentage level of a depressed person.</h2>
                            <h2 className='adjust_pie_chart_heading'>This person is {remainingValue.toFixed(2)}% not depressed and {remaining_remainingValue.toFixed(2)}% depressed as previewed in the chart above.</h2>
                          </div>

                </div>
        )

}
