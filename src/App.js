import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import HeaderSatu from "./components/HeaderSatu";
import HeaderDua from "./components/HeaderDua";
import HeaderTiga from "./components/HeaderTiga";
import Categories from "./components/Categories";
import OrderBy from "./components/OrderBy";
import Price from "./components/Price";
import products from "./services/products";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { DownOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="container mx-auto mb-96">
      <div className="flex justify-between  p-2">
        <HeaderSatu />
      </div>
      <div className="flex justify-between mt-10 p-2">
        <HeaderDua />
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
      <div className="mt-16 flex gap-10 mb-48">
        <div className="">
          <div className="w-64 ">
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
      {/* card footer */}
      <div className="flex justify-between p-10 rounded-lg border-2 ">
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Get in touch</h2>
          <Footer page="About Us" />
          <Footer page="Careers" />
          <Footer page="Press Releases" />
          <Footer page="Blog" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Connections</h2>
          <Footer page="Facebook" />
          <Footer page="Twitter" />
          <Footer page="Instagram" />
          <Footer page="Youtube" />
          <Footer page="Linkedin" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Earning</h2>
          <Footer page="Become an Affiliate" />
          <Footer page="Advertise Your Product" />
          <Footer page="Sell on Market" />
        </div>
        <div className="">
          <h2 className="text-lg font-semibold mb-5 ">Account</h2>
          <Footer page="Your account" />
          <Footer page="Return Centre" />
          <Footer page="100% purchase protection" />
          <Footer page="Chat with us" />
          <Footer page="Help" />
        </div>
      </div>
      <div className="mt-10 ">
        <p>Copyright © 2022 dksa.id</p>
      </div>
    </div>
  );
}
export default App;
