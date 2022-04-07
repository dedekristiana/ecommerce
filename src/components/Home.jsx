import { useState } from "react";
import Categories from "./Categories";
import OrderBy from "./OrderBy";
import Price from "./Price";
import products from "../services/product";
import ProductCard from "./ProductCard";
import { DownOutlined } from "@ant-design/icons";
import Layout from "./Layout";

const Home = () => {
  const [product, setProduct] = useState(products);
  const [categorySelected, setCategorySelected] = useState("All");

  const handleCategories = (e) => {
    const currentCategorySelected = e.target.id;
    setCategorySelected(currentCategorySelected);
    if (currentCategorySelected === "All") {
      setProduct(products);
    } else {
      const productByCategory = products.filter(
        (item, index) => item.category === currentCategorySelected
      );
      setProduct(productByCategory);
    }
  };

  const inCategory = [];
  products.map((cat, index) => {
    if (inCategory.indexOf(cat.category) === -1) inCategory.push(cat.category);
  });

  return (
    <Layout>
      <div className="my-16 flex gap-10 ">
        <div className="">
          <div className="w-64 ">
            <h2 className="font-semibold text-lg">Categories</h2>
            {inCategory.map((item, index) => {
              // <Categories item={item} />;
              return (
                <div className="flex justify-between p-0.5 items-center ">
                  <p
                    className={`p-1 rounded-lg text-sm ${
                      item === categorySelected ? `bg-green-200` : ""
                    }`}
                    onClick={(e) => handleCategories(e)}
                    id={item}
                  >
                    {item}
                  </p>
                  <p className="bg-green-200 p-1 rounded-lg text-green-800">
                    {
                      products.filter(
                        (jumlah, jumlahindex) => jumlah.category === item
                      ).length
                    }
                  </p>
                </div>
              );
            })}
            <div className="flex justify-between p-0.5 items-center ">
              <p
                className={`p-1 rounded-lg text-sm ${
                  "All" === categorySelected ? `bg-green-200` : ""
                }`}
                onClick={(e) => handleCategories(e)}
                id="All"
              >
                All
              </p>
              <p className="bg-green-200 p-1 rounded-lg text-green-600">
                {products.length}
              </p>
            </div>
          </div>
          <div className="mt-14 leading-3">
            <h2 className="font-semibold text-lg">Order By</h2>
            <OrderBy radio="Termurah" />
            <OrderBy radio="Termahal" />
            <OrderBy radio="Terlaris" />
          </div>
          <div className="mt-14">
            <h2 className="font-semibold text-lg">Rating</h2>
          </div>
          <Price />
        </div>
        {/* main menu */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-10">
            {product.map((item, index) => {
              return <ProductCard item={item} />;
            })}
          </div>
          <div className=" flex justify-center bg-green-600 rounded-lg h-10 px-2 items-center w-64 my-10 ">
            <p className="  font-semibold text-white">Show More Product</p>
            <DownOutlined className="text-xs text-white ml-1.5" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
