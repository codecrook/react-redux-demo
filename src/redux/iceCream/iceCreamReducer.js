import { BUY_ICECREAM } from "./iceCreamTypes";

const initialSate = {
    numOfIceCreams: 10
};

const iceCreamReducer = (state = initialSate, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
        default: return state;
    }
};

export default iceCreamReducer;