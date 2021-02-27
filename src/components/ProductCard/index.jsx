import {
  Card,
  CardTitle,
  CardPrice,
  CardInformations,
  CardImage,
  Image,
  CardButton,
} from "./styles";

import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/thunk";

// import { addProduct } from "../../store/modules/cart/actions";

const ProductCard = ({ product }) => {
  const { name, price, description, image } = product;
  const { brand, model } = description;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addProductThunk(product));
  };

  return (
    <Card>
      <CardImage>
        <Image src={image} />
      </CardImage>
      <CardTitle>{name}</CardTitle>
      <CardInformations>{brand}</CardInformations>
      <CardPrice>R${price}</CardPrice>
      <CardInformations>{model}</CardInformations>
      <CardButton onClick={handleAdd}>Add to cart</CardButton>
    </Card>
  );
};

export default ProductCard;
