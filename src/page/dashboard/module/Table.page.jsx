import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const TablePage = () => {
    const charRef = useRef();

    useEffect(() => {
  
      const ctx = charRef.current.getContext("2d");
  
  
      new Chart(ctx, {
        type: 'line',
        data:{
            labels: ['jan','feb','match','april','may','june','july'],
            datasets: [{
              label: 'My First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
  
    },[])
      
  
  
    return (
      <div>
          <canvas ref={charRef} >hello</canvas>
      </div>
    )
}

export default TablePage