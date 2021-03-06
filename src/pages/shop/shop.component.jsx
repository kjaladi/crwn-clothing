import React from 'react';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../../components/collection/collection.component';
import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div>
            <Route exact path={match.path} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>

    )
}

export default ShopPage;