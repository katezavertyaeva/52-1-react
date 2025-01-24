import "./styles.css";
import Product from "../../components/Product/Product";
import { products } from "./data";

function Homework05() {
  const productsElements = products.map((product) => {
    return (
      <Product
      // внутреннее свойство элементов, передаётся внутри метода map (через props в компонент передавать не нужно!)
        key={product.id}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });

  return <div className="homework05-wrapper">{productsElements}</div>;
}

export default Homework05;
