import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
        {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...itemProps}) => (
                <CollectionItem key={id} {...itemProps} />
        ))}
        </div>
    </div>
)

export default CollectionPreview;