import React from "react";
// import { connect } from "react-redux";

// import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  BackgroudImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer,
  AddToCartButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroudImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddToCartButton inverted>Add to Cart</AddToCartButton>
    </CollectionItemContainer>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

export default CollectionItem;
