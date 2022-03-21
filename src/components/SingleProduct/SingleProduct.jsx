import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { setCartCount } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="col-md-4 col-sm-6"
    >
      <div className="card p-3 border">
        <img className="w-50 m-auto" src={props.product.image} alt="" />
        <h1>{props.product.title.slice(0, 10)}</h1>
        <div className="d-flex justify-content-around">
          <button onClick={setCartCount} className="btn btn-success">
            Add To Cart
          </button>
          <button className="btn btn-danger">Delete</button>
          {/* <button className="btn btn-primary">Details</button> */}
          <ReactModal product={props.product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
