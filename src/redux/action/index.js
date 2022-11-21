import * as types from './actionConstants';

/**
 * Notification Popup
 */
export const showToast = (payload) => ({
  type: types.SHOW_TOAST,
  payload
})

/**Product */
export const setFilterProduct = (payload) => ({
  type: types.SET_FILTER_PRODUCT,
  payload
})


export const setAllProduct = (payload) => ({
  type: types.SET_ALL_PRODUCT,
  payload
})


export const setSelectedProductDetails = (payload) => ({
  type: types.SET_SELECTED_PRODUCT_DETAILS,
  payload
});
export const setCategory = (payload) => ({
  type: types.SET_CATEGORY,
  payload
})

