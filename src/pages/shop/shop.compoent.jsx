import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        const { collections } = this.state;


        return (

            <div>
                {/* <h1>SHOP PAGE</h1> */}
                {
                    collections.map(({id, ...others}) => {
                        return (
                            <CollectionPreview 
                            key={id}
                            {...others}
                            />
                        )
                    })
                }

            </div>
        )
    }
}

export default ShopPage;