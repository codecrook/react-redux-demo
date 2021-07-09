import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';


function IceCreamContainer() {
    const { numOfIceCreams } = useSelector(state => ({ numOfIceCreams: state.iceCream.numOfIceCreams }));
    const dispatch = useDispatch();
    return (
        <div>
            <h2>No. of IceCreams: {numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    );
}

export default IceCreamContainer;
