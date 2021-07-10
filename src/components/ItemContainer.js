import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer({ itemType, item, buyItem }) {
    return (
        <div>
            <h2>No. Of Items({itemType}): {item}</h2>
            <button onClick={buyItem}>Buy {itemType}</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = {
        cake: () => dispatch(buyCake()),
        icecream: () => dispatch(buyIceCream())
    }[ownProps.itemType];

    return { buyItem: dispatchFunction };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
