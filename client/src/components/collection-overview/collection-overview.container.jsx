import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "./collection-overview.component";
import withSpinner from "../with-spinner/with-spinner.component";

import { selectCollectionsisFetching } from "../../redux/shop/shop.selector";

const mapstateToProps = createStructuredSelector({
  isLoading: selectCollectionsisFetching,
});

const CollectionOverviewConatiner = compose(
  connect(mapstateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewConatiner;
