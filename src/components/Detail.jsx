import { useParams } from "react-router-dom";
import products from "../services/product";
import Layout from "./Layout";
import ProductCard from "./ProductCard";

const Detail = () => {
  const params = useParams();
  const item = products.filter((item) => item.name === params.productName);
  console.log(item);
  return (
    <Layout>
      <ProductCard item={item[0]} />
    </Layout>
  );
};
export default Detail;
