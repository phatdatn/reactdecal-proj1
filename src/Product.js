import React from "react";
let count = 0;
class Product extends React.Component {
  addtoCart(name) {
    count++;
    alert("There are " + count + " " + name + "(s) in your cart!")
  }
  render() {
    return (
      <div class="ui cards">
        <div class="card">
          <div class="content">
            <div class="header">{this.props.productName}</div>
              <div class="description">
                Price: ${this.props.price}
              </div>
            </div>
            <div class="ui bottom attached button" onClick={() => this.addtoCart(this.props.productName)}>
            <i class="add icon"></i>
            Add to Cart
            </div>
        </div>
      </div>
    );
  }



}

export default Product;
