import React from "react";
import ReactDOM from "react-dom";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-tem">
        <div className="left-block">
          <img />
        </div>
        <div className="right-block">
          <div>Phone</div>
          <div>Rs 999</div>
          <div>Q : 1</div>
          <div className="cart-item-actions">{}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;
