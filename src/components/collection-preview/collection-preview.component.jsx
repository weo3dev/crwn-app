import React from 'react';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (

    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className='preview'>
        {
            DataTransferItemList.map(item => (
                <div key={item.id}>{item.name}</div>
            ))
        }
        </div>
    </div>

)

export default CollectionPreview;