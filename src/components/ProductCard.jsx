import NumberFormat from "react-number-format";
const ProductCard = (props) => {
  const item = props.item;
  const priceAfterDiscount =
    item.originalPrice - (item.originalPrice * item.discountPercent) / 100;
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
