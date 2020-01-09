import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../store/actions/product';

class Products extends Component {
  static propTypes = {
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
  }

  static defaultProps = {
    products: []
  }

  componentWillMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {this.props.products.map(p => 
            <li key={p.id}>{p.brand} {p.model}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const dispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapStateToProps, dispatchToProps)(Products);