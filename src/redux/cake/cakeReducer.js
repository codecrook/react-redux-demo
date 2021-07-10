import { BUY_CAKE } from "./cakeTypes";

const initialSate = {
    numOfCakes: 10
};

const cakeReducer = (state = initialSate, action) => {
    switch (action.type) {
        case BUY_CAKE: return { ...state, numOfCakes: state.numOfCakes - action.payload };
        default: return state;
    }
};

export default cakeReducer;