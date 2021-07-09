import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer() {
    const { numOfCakes } = useSelector(state => ({ numOfCakes: state.numOfCakes }));
    const dispatch = useDispatch();
    return (
        <div>
            <h2>No. of cakes: {numOfCakes}</h2>
            {/* <button onClick={buyCake}>Buy Cake</button> */}
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    );
}

// const mapStateToProps = state => ({ numOfCakes: state.numOfCakes });
// const mapDispatchToProps = dispatch => ({ buyCake: () => dispatch(buyCake()) });

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

export default CakeContainer;
