import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

class ChartAdmin extends Component {
  state = {
    data: [20, 25, 19, 15, 18, 10, 60, 12, 30, 11, 20],
    labels: [
      'senin',
      'selasa',
      'rabu',
      'kamis',
      "jum'at",
      'sabtu',
      'minggu',
      'senin',
      'selasa',
      'rabu',
      'kamis',
    ],
  };
  render() {
    const dataChart = {
      labels: this.state.labels,
      datasets: [
        {
          data: this.state.data,
          label: 'Penjualan',
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
        },
      ],
    };
    return (
      <Line
        type="line"
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'Penjualan Harian',
              font: {
                size: 24,
              },
            },
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
            x: {
              display: true,
              min: this.state.data.length - 7,
            },
          },
        }}
        data={dataChart}
      />
    );
  }
}

export default ChartAdmin;
