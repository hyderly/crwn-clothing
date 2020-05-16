import React from "react";
import { Link } from "react-router-dom";

import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, routeName, items }) => (
  <div className="collection-preview">
    <span>
      <Link className="title" to={routeName}>
        {title}
      </Link>
    </span>

    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
