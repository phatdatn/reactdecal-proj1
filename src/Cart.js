import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <div className="page-content">
            {ProductData.products.map(prod => (<Product productName={prod.name} price={prod.cost} limit={prod.stock}/>))}
        </div>
    );
  }

}

export default Cart;
