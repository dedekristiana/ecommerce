import logo from "./logo.svg";
import "./App.css";
import HeaderSatu from "./components/HeaderSatu";
import HeaderDua from "./components/HeaderDua";
import HeaderTiga from "./components/HeaderTiga";
import Categories from "./components/Categories";
import OrderBy from "./components/OrderBy";
import Price from "./components/Price";
import products from "./services/products";
import { ShoppingOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";

import NumberFormat from "react-number-format";

function App() {
  return (
    <div className="container mx-auto mb-96">
      <div className="flex justify-between  p-2">
        <HeaderSatu />
      </div>
      <div className="flex justify-between mt-10 p-2">
        <div className="font-bold text-3xl">
          <h1>
            LOKAL-<span className="text-green-400">IN</span>
          </h1>
        </div>
        <div className="flex items-center">
          <input type="text" className="w-96 h-8 bg-gray-100 rounded-lg p-2" />
          <SearchOutlined className="rotate-90 -ml-6" />
        </div>
        <div className="flex gap-5">
          <UserOutlined className="text-[23px] self-center" />
          <div className="relative self-center">
            <ShoppingOutlined className="text-[25px]" />
            <div className="absolute bg-red-500 -bottom-2 -left-1 text-center text-xs text-white w-4 h-4 rounded-3xl">
              4
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-8 p-2">
        <ul className="flex justify-around">
          <HeaderTiga title="Bakery" />
          <HeaderTiga title="Fruit & Vegetables" />
          <HeaderTiga title="Meat & Fish" />
          <HeaderTiga title="Drinks" />
          <HeaderTiga title="Kitchen" />
          <HeaderTiga title="Special Nutrition" />
          <HeaderTiga title="Baby" />
          <HeaderTiga title="Pharmacy" />
        </ul>
      </div>
      <div className="mt-16 flex gap-10">
        <div className="w-64">
          <div className=" leading-3">
            <h2 className="font-semibold text-lg">Categories</h2>
            <Categories menu="Bolu" stok="320" />
            <Categories menu="Mie" stok="112" />
            <Categories menu="Pizza" stok="32" />
            <Categories menu="Dessert" stok="3" />
            <Categories menu="ALL" stok="50" />
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
        <div className="flex flex-wrap gap-10">
          {products.map((item, index) => {
            const priceAfterDiscount =
              item.originalPrice -
              (item.originalPrice * item.discountPercent) / 100;
            return (
              <div className="border-2 rounded-lg pb-2">
                <img src={`/${item.image}`} className="p-5 " />
                <div className="text-left pl-5 mb-2">
                  <h3 className="font-semibold text-lg">{item.nama}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="flex justify-between px-5">
                  <div className="flex flex-col">
                    <span>
                      <NumberFormat
                        thousandSeparator={"."}
                        decimalSeparator={","}
                        prefix={"Rp "}
                        value={priceAfterDiscount}
                        displayType={"text"}
                      />
                    </span>
                    {item.discountPercent > 0 && (
                      <span className="line-through text-xs">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="">
                    <button className="bg-green-600 p-2 rounded-lg font-semibold text-white">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className=" w-full h-10">
            <div className="flex justify-center">
              <button className="bg-green-400 h-10 px-2 text-center font-semibold text-white">
                Show More Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
