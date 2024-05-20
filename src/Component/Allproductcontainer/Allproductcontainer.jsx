import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../utility/constant";
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
        <div className="left-section w-2/12 min-h-full border border-black bg-gray">
          <h2>Filter</h2>
          <div className="p-2">
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
                className="p-1 bg-blue-900 rounded-md text-white"
                value="Apply"
              />
            </form>
          </div>
        </div>
        <div className="right-section flex w-10/12 justify-around flex-wrap gap-2 ">
          {filteredProduct &&
            filteredProduct.map((product, index) => {
              console.log(product);
              return (
                <div
                  className="product-card w-[250px] border border-black rounded-md p-2"
                  key={index}
                >
                  <img
                    src={product.image}
                    className="w-full aspect-square object-contain"
                    alt={product.name}
                  />
                  <div className="product-info w-full">
                    <div className="product-name  w-full">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                    <div>{product.category}</div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    )
  );
};

export default Allproductcontainer;
