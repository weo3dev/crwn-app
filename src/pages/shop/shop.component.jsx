import React from 'react';

import SHOP_DATA from './shop.data';

class shopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>shop page</div>
        )
    }
}