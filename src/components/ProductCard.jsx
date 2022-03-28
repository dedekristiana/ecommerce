import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const item = props.item;
  const priceAfterDiscount =
    item.originalPrice - (item.originalPrice * item.discountPercent) / 100;
  return (
    <div className="border-2 rounded-lg pb-2 ">
      <img src={`/${item.image}`} alt="produk" className="p-5 " />
      <div className="text-left pl-5 mb-2">
        <Link to={item.name}>
          <h3 className="font-semibold text-lg">{item.name}</h3>
        </Link>
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
            <span className="line-through text-xs">{item.originalPrice}</span>
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
};

export default ProductCard;
