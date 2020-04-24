import React from 'react'
import { Bar } from 'react-chartjs-2';
import classes from './style.module.css'


function BarChart() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                label: 'Sales analytics for 2020 (M)',
                data: [3,2,2,1,5],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            },
            {
                label: 'Sales analytics for 2019 (M)',
                data: [2,2,2.5,1,4],
                backgroundColor: 'rgba(167,90,132,0.2)',
                borderColor: 'rgba(100,50,132,1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ]
    }


    const options = {
        title: {
            display: true,
            text: 'Bar Chart'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 6,
              stepSize: 1
            },
            scaleLabel: {
                display: true,
                labelString: 'Number of sales'
              }    
          }],
          xAxes: [{
              ticks: {
              },
              scaleLabel: {
                display: true,
                labelString: ' Months'
              }
          }]
        }
      };

    return (
        <div>
            <div className={classes.chart}>
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}

export default BarChart
