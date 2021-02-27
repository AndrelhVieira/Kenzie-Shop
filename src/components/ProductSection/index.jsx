import ProductCard from "../ProductCard";
import { ProductsSection } from "./styles";

import products from "../../products";

const ProductSection = () => {
  return (
    <article>
      <ProductsSection>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsSection>
    </article>
  );
};

export default ProductSection;
