import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import classes from './style.module.css'


function DoughnutChart() {
    const data = {
        labels: ['Jan','Feb','Mar','Apr','May'],
        datasets: [
            {
                label: 'Sales analytics for 2020 (M)',
                data: [3,2,2,1,5],
                backgroundColor: ['blue','red','green','yellow','orange'],
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
            }
        ]
    }


    const options = {
        title: {
            display: true,
            text: 'Doughnut Chart'
        },
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                var total = meta.total;
                var currentValue = dataset.data[tooltipItem.index];
                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                return currentValue + ' (' + percentage + '%)';
              },
              title: function(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              }
            }
        }
      };

    return (
        <div>
            <div className={classes.chart}>
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}

export default DoughnutChart
