import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import {selectShopItems} from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">                    {
                collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
            }
    </div>
)

const mapStateToProps = (state) => ({
    collections: selectShopItems(state)
})

export default connect(mapStateToProps)(CollectionOverview);