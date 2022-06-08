import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { groupBy, map, keys, reduce } from 'lodash';
import Chart from 'chart.js/auto';
import axios from 'axios';

class ChartAdmin extends Component {
  state = {
    data: [20, 25, 19, 15, 18, 10, 60, 12, 30, 11, 20],
    day: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', "Jum'at", 'Sabtu'],
    arr: [],
  };

  getData = async () => {
    await axios
      .get(`${process.env.PUBLIC_URL}/transactions`, {
        headers: { Authorization: `${localStorage.getItem('token')}` },
      })
      .then(res => {
        let result = res.data.data;
        this.filtering(result);
      });
  };

  filtering = async result => {
    let y = [];
    let z = [];
    let arr = [];
    await result.map(x => {
      var d = new Date(Date.parse(x.transactionDate));
      arr.push({
        data: x.totalOrder,
        label: d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear(),
        day: this.state.day[d.getDay()],
      });
    });
    let group = groupBy(arr, 'label');
    var res = await map(keys(group), x => {
      return reduce(
        group[x],
        (i, j) => {
          let order = {
            count: (i.count += j.data),
            day: j.day,
          };
          return order;
        },
        { labels: x, count: 0 }
      );
    });
    await res.map(x => {
      y.push(x.count);
      z.push(x.day);
    });
    await this.setState({ data: y, labels: z });
  };

  componentDidMount = async () => {
    await this.getData();
  };

  render() {
    const dataChart = {
      labels: this.state.labels,
      datasets: [
        {
          data: this.state.data,
          label: 'Penjualan',
          backgroundColor: 'blue',
          borderColor: 'blue',
          fill: false,
        },
      ],
    };
    return (
      <Line
        type="line"
        options={{
          transitions: {
            show: {
              animations: {
                x: {
                  from: 0,
                },
                y: {
                  from: 0,
                },
              },
            },
          },
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
              display: false,
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 15,
            },
            x: {
              display: true,
              min: this.state.data.length - 14,
            },
          },
        }}
        data={dataChart}
      />
    );
  }
}

export default ChartAdmin;
