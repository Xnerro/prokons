import React, { Component } from 'react';
import '../App.css';
import Content from '../component/content';
import NavComponentAdmin from './component/nav';
import UserMenu from './component/userMenu';

class App extends Component {
  state = {
    baju: [
      {
        id: 0,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Baju',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 1,
        src: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/5/21/609462/609462_32b8fd2d-5480-4d0d-9a75-b4f88e899d30_2048_2047.jpg',
        title: 'Dewasa',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 2,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Anak',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 3,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Anak Balita',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
    ],

    celana: [
      {
        id: 4,
        src: 'https://th.bing.com/th/id/OIP.YFYoGcoluytZq4HBiYA8-QHaHa?pid=ImgDet&rs=1',
        title: 'Celana',
        text: 'Celana',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 5,
        src: 'https://halalpedia.oss-ap-southeast-5.aliyuncs.com/2021/03/20210309132318-60471456d533e-3.jpg',
        title: 'Pendek',
        text: 'Celana',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 6,
        src: 'https://th.bing.com/th/id/OIP.YFYoGcoluytZq4HBiYA8-QHaHa?pid=ImgDet&rs=1',
        title: 'Harem',
        text: 'Celana',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 7,
        src: 'https://th.bing.com/th/id/OIP.YFYoGcoluytZq4HBiYA8-QHaHa?pid=ImgDet&rs=1',
        title: 'Anak Balita',
        text: 'Celana',
        nominal: 'Rp',
        harga: 20000,
      },
    ],

    setelan: [
      {
        id: 9,
        src: 'https://th.bing.com/th/id/R.81014a6a66e1f49e242c0c7e9ef3af90?rik=I2oejwuY33ZqUw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-MVGXB4lhmOY%2fUxh9GpDry4I%2fAAAAAAAAAB8%2fC02Q2hZMOoY%2fs1600%2fBaju%2bBayi%2bBermerek%2b-%2b3.jpg&ehk=E4LUgZ%2frpmv7RvUwEq3EDkqf4SYQ31wlzOOc1A0PjfU%3d&risl=&pid=ImgRaw&r=0',
        title: 'Baju',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 10,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Dewasa',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 11,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Anak',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
      {
        id: 12,
        src: 'https://th.bing.com/th/id/OIP.R03fDmx1XrRjnT0wW6RhQQHaHa?pid=ImgDet&rs=1',
        title: 'Anak Balita',
        text: 'kemeja',
        nominal: 'Rp',
        harga: 20000,
      },
    ],
    userMenu: false,
    admin: true,
  };

  setUserMenu = () => {
    this.setState({ userMenu: true });
  };

  closeUserMenu = () => {
    this.setState({ userMenu: false });
  };
  render() {
    return (
      <div>
        <NavComponentAdmin
          onUserMenu={this.setUserMenu}
          onCloseUserMenu={this.closeUserMenu}
        />
        {this.state.userMenu && <UserMenu />}
        <Content
          dataBaju={this.state.baju}
          dataCelana={this.state.celana}
          dataSetelan={this.state.setelan}
          adminValidation={this.state.admin}
        />
      </div>
    );
  }
}

export default App;
