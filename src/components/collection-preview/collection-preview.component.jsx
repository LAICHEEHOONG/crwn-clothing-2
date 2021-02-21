import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview' >
                {
                    items
                    .filter((arr, index) => index < 4)
                    .map(({id, ...others})=> {
                        return (
                            <CollectionItem key={id} {...others}/>
                        )
                    })
                }
            </div>
        </div>
        )
}

export default CollectionPreview;