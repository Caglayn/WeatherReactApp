import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineChartCard = (props) => {
    const{list} = props;

    const [chartData, setChartData] = useState({
        labels: list.map(i => i.formattedTime.split(' ')[1]), 
        datasets: [
          {
            label: list[0].unit,
            data: list.map(i=> i.val),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2
          }
        ]
      });
    const[options, setOptions] = useState({
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: list[0].name
          },
        },
      });

    useEffect(()=>{
        setChartData({
            labels: list.map(i => i.formattedTime.split(' ')[1]), 
            datasets: [
              {
                label: list[0].unit,
                data: list.map(i=> i.val),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 2
              }
            ]
          });

          setOptions({
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: list[0].name
              },
            },
          })
    }, [list]);
    
    
    
  return (
    <div className="card p-3">
        <Line
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default LineChartCard