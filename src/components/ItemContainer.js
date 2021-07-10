import React from 'react';
import { connect } from 'react-redux';

function ItemContainer({ itemType, item }) {
    return (
        <div>
            <h2>No. Of Items: {item}</h2>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    const itemState = {
        cake: state.cake.numOfCakes,
        icecream: state.iceCream.numOfIceCreams
    }[ownProps.itemType] || 0;

    return { item: itemState };
}

export default connect(mapStateToProps)(ItemContainer);
