import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {connect} from 'react-redux';
import {selectShopItems} from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) =>
    (
        <div>
            {
                collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
            }
        </div>
    )


const mapStateToProps = (state) => ({
    collections: selectShopItems(state)
})

export default connect(mapStateToProps)(ShopPage);