import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage  = ({collection}) => {
    console.log("logging",collection);
    return (
    <div className="collection-page">
        <h1>COLLECTION PAGE</h1>
    </div>
)};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);