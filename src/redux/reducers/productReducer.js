import { SET_ALL_PRODUCT, SET_FILTER_PRODUCT, SET_SELECTED_PRODUCT_DETAILS, SET_CATEGORY } from "../action/actionConstants";

const initialState = {
    allProduct: [],
    filterProduct: [],
    productInfo: {},
    category: 'All Category'
};

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload
            };
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case SET_FILTER_PRODUCT:
            return {
                ...state,
                filterProduct: action.payload
            };
        case SET_SELECTED_PRODUCT_DETAILS:
            return {
                ...state,
                productInfo: action.payload
            };
        default:
            return state;
    }
};

export default ProductReducer;
