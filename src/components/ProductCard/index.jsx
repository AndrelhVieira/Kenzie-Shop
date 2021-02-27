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
import { useState } from "react";

import { addProduct } from "../../store/modules/cart/actions";

const ProductCard = ({ product }) => {
  const [isAdd, setIsAdd] = useState(false);

  const { name, price, description, image } = product;
  const { brand, model } = description;

  const dispatch = useDispatch();

  const handleAdd = () => {
    setIsAdd(true);
    dispatch(addProduct(product));
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
      {isAdd ? (
        <CardButton disabled>Added</CardButton>
      ) : (
        <CardButton onClick={handleAdd}>Add to cart</CardButton>
      )}
    </Card>
  );
};

export default ProductCard;
