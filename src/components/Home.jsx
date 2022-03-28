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

  const inCategory = [];
  products.map((cat, index) => {
    if (inCategory.indexOf(cat.category) === -1) inCategory.push(cat.category);
  });

  return (
    <Layout>
      <div className="mt-16 flex gap-10 mb-48">
        <div className="">
          <div className="w-64 ">
            <h2 className="font-semibold text-lg">Categories</h2>
            {inCategory.map((item, index) => {
              return <Categories item={item} />;
            })}
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
        <div className="flex flex-wrap gap-10">
          {products.map((item, index) => {
            return <ProductCard item={item} />;
          })}
          <div className="w-full flex justify-center">
            <div className=" flex justify-center bg-green-400 rounded-lg h-10 px-2 items-center w-64 ">
              <p className="  font-semibold text-white">Show More Product</p>
              <DownOutlined className="text-xs text-white ml-1.5" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
