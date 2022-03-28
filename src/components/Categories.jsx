import { useState } from "react";
import products from "../services/product";

function Categories(props) {
  const item = props.item;

  const [product, setProduct] = useState(products);

  const handleCategories = (e) => {
    const categorySelected = e.target.id;
    const productByCategory = product.filter(
      (item, index) => item.category === categorySelected
    );
    setProduct(productByCategory);
    console.log(productByCategory);
  };

  return (
    <div className="flex justify-between mt-4 text-sm leading-none">
      <p className="p-1" onClick={(e) => handleCategories(e)} id={item}>
        {item}
      </p>
      <p className="bg-green-200 p-1 rounded-lg text-green-600">
        {
          products.filter((jumlah, jumlahindex) => jumlah.category === item)
            .length
        }
      </p>
    </div>
  );
}

export default Categories;
