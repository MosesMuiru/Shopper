import React from "react";
import "./ProductDisplay.css";

import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

function ProductDisplay(props) {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} className="product-main-img" alt="" />
        </div>
      </div>

      <div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-stars">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={star_dull_icon} alt="" />

            <p>(122)</p>
          </div>

          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>

            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>

          </div>
            <div className="productdisplay-right-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              voluptatum.
            </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
          <button>ADD TO CART</button>
          <div className="productdisplay-right-category">
            <p>
              <span>Category :</span> Women, T shirt, Crop Top
            </p>
            <p>
              <span>Tags :</span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;