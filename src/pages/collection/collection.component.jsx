import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  console.log(items);
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

// OwnProps are personal properties of component
// We also need state because in shop selector we return funtion from another function
const mapstateToProps = (state, OwnProps) => ({
  collection: selectCollection(OwnProps.match.params.collectionId)(state),
});

export default connect(mapstateToProps)(CollectionPage);
