import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer() {
    const { numOfCakes } = useSelector(state => ({ numOfCakes: state.cake.numOfCakes }));
    const dispatch = useDispatch();
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>No. of cakes: {numOfCakes}</h2>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            {/* <button onClick={buyCake}>Buy Cake</button> */}
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake(s)</button>
        </div>
    );
}

// const mapStateToProps = state => ({ numOfCakes: state.numOfCakes });
// const mapDispatchToProps = dispatch => ({ buyCake: () => dispatch(buyCake()) });

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

export default CakeContainer;
