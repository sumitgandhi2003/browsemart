import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utility/constant";
import axios from "axios";

const ProductDetailPage = () => {
  const [productData, SetProductData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(API_URL + "products/" + id)
      .then((response) => SetProductData(response.data));
  }, [id]);
  console.log(productData);
  return (
    productData && (
      <div className="flex p-3 gap-3">
        <div className="img-container w-1/2">
          <img
            src={productData.image}
            className="w-[80%] object-contain aspect-square p-2 border"
            alt=""
          />
        </div>
        <div className="product-description w-1/2 flex flex-col gap-3 ">
          <h1 className="product-name font-bold text-2xl text-left">
            {productData?.title}
          </h1>
          <p className="product-description text-left w-[90%]">
            {productData?.description}
          </p>
          <p className="product-price text-left">
            ₹ {(productData?.price * 83.71).toFixed(2)}
          </p>
          <div className="buy-buttons flex gap-3">
            <div className="w-full bg-green-700 rounded text-white p-2">
              Add To Cart
            </div>
            <div className="w-full">Buy</div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetailPage;
