import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact  path={`${match.path}`} component={CollectionOverview} />
    <Route path={`/shop/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;