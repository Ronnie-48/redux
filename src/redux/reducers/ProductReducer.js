import { ActionTypes } from "../actions/ProductAction";

const initialSate = {
  product: [
    {
      id: 1,
      name: "product1",
      price: 100,
    },
  ],
};
export const productReducer = (state = initialSate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    default:
      return state;
  }
};
