let initialState = {
    products: [],
    loading: true
}

const reducer = function(state = initialState, action) {
    switch(action.type) {

        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        break;
    }

    return state;
        
}

export default reducer;
