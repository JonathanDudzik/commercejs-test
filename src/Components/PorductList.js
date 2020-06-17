import React from 'react';
import axios from 'axios';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_18345a3fec505d8aae77e051c6a3475ee6234dd797473', true)

export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    commerce.products.list().then((result) => {
      console.log(result.data.map(product => product));
      this.setState({ products: result.data })
    });
  }


  render() {
    return (
      <div>
        <h1>Dudzik Bros inc.</h1>
        <h2>Offer of the day!!</h2>
        {this.state.products.map(product => <h3>Product Name: {product.name}</h3>)}
        {this.state.products.map(product => <h3>Product Price: {product.price.formatted}</h3>)}
        {this.state.products.map(product => <h3>Product Discription {product.description}</h3>)}
        {this.state.products.map(product => <img src={product.media.source} alt="this is a baby image" />)}
      </div>
    )
  }
}