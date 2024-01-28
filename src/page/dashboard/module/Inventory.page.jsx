import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

const InventoryPage = () => {

    const charRef = useRef();

  useEffect(() => {

    const ctx = charRef.current.getContext("2d");


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
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

export default InventoryPage