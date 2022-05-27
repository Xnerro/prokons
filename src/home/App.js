import axios from 'axios';
import React, { Component } from 'react';
import '../App.css';
import Content from '../component/content';
import NavComponent from '../component/nav';

class Kasir extends Component {
  state = {
    baju: [],
    celana: [],
    setelan: [],
  };
  filteringData = async result => {
    let setelan = [];
    let atasan = [];
    let bawahan = [];
    await result.map(key => {
      if (key.variants.map(c => c.isi === 'atasan').includes(true)) {
        atasan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'atasan')],
        });
      }
      if (key.variants.map(c => c.isi === 'setelan').includes(true)) {
        setelan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'setelan')],
        });
      }
      if (key.variants.map(c => c.isi === 'bawahan').includes(true)) {
        bawahan.push({
          id: key.id,
          nama: key.name,
          image: key.image,
          variant: [key.variants.filter(c => c.isi === 'bawahan')],
        });
      }
    });
    this.setState({ baju: atasan, setelan: setelan, celana: bawahan });
  };

  getData = () => {
    axios
      .get(`${process.env.PUBLIC_URL}/products`, {
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      })
      .then(res => {
        let result = res.data.data;
        this.filteringData(result);
      });
  };

  componentDidMount = () => {
    this.getData();
  };
  render() {
    return (
      <div>
        <NavComponent name={this.props.akun} setToken={this.props.setToken} />
        <Content
          dataBaju={this.state.baju}
          dataCelana={this.state.celana}
          dataSetelan={this.state.setelan}
        />
      </div>
    );
  }
}

export default Kasir;
