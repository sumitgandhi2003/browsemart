import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utility/constant";
import { Link } from "react-router-dom";
const Allproductcontainer = () => {
  const [allProduct, SetAllProduct] = useState();
  const [allCategories, SetAllCategories] = useState();
  const [filteredProduct, SetFilteredProduct] = useState();
  const [filteredCategory, SetFilteredCategory] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formElement = Array.from(e.target.elements).slice(0, -1);
    // console.log(formElement);
    // formElement.map((element, index) => {
    //   console.log(element.checked);
    //   console.log(element.value);
    //   if (element.checked) {
    //     SetFilteredProduct(
    //       allProduct?.filter((item) => item.category.includes(element.value))
    //     );
    //   }
    // });
    console.log(filteredCategory);
    let filter = [];
    filteredCategory.forEach((category) => {
      const products = allProduct?.filter((item) =>
        item.category.includes(category)
      );
      filter = [...filter, ...products];
    });
    SetFilteredProduct(filter);
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      SetFilteredCategory((previous) => [...previous, e.target.value]);
    }
    // e.target.checked
    //   ? SetFilteredProduct(
    //       allProduct?.filter((item) => item.category.includes(e.target.value))
    //     )
    console.log(e);
  };
  useEffect(() => {
    axios
      .get(API_URL + "products")
      .then((response) => {
        SetAllProduct(response.data);
        SetFilteredProduct(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(API_URL + "products/categories")
      .then((response) => SetAllCategories(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    filteredProduct && (
      <div className="product-container w-full h-full mt-4 flex gap-2 p-4">
        <div className="left-section w-2/12 h-full border border-black bg-gray min-w-[200px] mobile:hidden laptop:block">
          <h2>Filter</h2>
          <div className="p-2 ">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              {allCategories?.map((category, index) => {
                return (
                  <div className="flex gap-1 items-center" key={index}>
                    <input
                      type="checkbox"
                      name="filter"
                      id={category}
                      onClick={(e) => {
                        handleChange(e);
                      }}
                      value={category}
                    />
                    <label htmlFor={category} className="cursor-pointer">
                      {category}
                    </label>
                  </div>
                );
              })}
              <input
                type="submit"
                className="p-2 w-full my-2 cursor-pointer flex justify-center items-center  bg-blue-900 rounded-md text-white"
                value="Apply"
              />
            </form>
          </div>
        </div>
        <div className="right-section flex w-10/12 justify-around flex-wrap gap-2 mobile:w-full laptop:w-10/12">
          {filteredProduct &&
            filteredProduct.map((product, index) => {
              console.log(product);
              return (
                // <Link
                //   to={"/product/" + product.id}
                //   className="w-full"
                //   key={index}
                // >
                <div
                  key={index}
                  className="product-card w-full flex gap-4 h-[200px] border-2 border-gray-200
                   rounded-md p-2 shadow-sm"
                >
                  <Link
                    to={"/product/" + product.id}
                    className="p-2 aspect-square object-contain"
                  >
                    <img
                      src={product.image}
                      className="aspect-square object-contain "
                      alt={product.name}
                    />
                  </Link>
                  <div className="product-info w-full text-left p-2 relative">
                    <Link to={"/product/" + product.id}>
                      <div className="product-name  w-full text-2xl hover:text-gray-400">
                        {product.title}
                      </div>
                    </Link>
                    <div className="product-price  font-bold text-lg ">
                      ₹{(product?.price * 83.71)?.toFixed(2)}
                    </div>
                    <div>{product.category}</div>
                    <div className="add-to-cart-btn absolute bottom-2 left-3">
                      <button className="p-2 rounded-lg  bg-blue-900 text-white">
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                // </Link>
              );
            })}
        </div>
      </div>
    )
  );
};

export default Allproductcontainer;
