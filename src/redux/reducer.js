import { GET_LIST } from "./actionTypes";
import { ADD_ITEM } from "./actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST":
      const { payload } = action;
      return {
        ...state,
        productList: payload
      };

    case "ADD_ITEM": {
      const {
        itemName,
        itemDescription,
        itemPrice,
        itemImage
      } = action.payload;

      return {
        ...state,
        productList: {
          ...state.productList,
          products: [
            ...state.productList.products,
            {
              title: itemName,
              description: itemDescription,
              price: itemPrice,
              thumbnail: itemImage
            }
          ]
        }
      };
    }

    case "DELETE_ITEM": {
      const updatedData = state.productList.products.filter((val, index) => {
        return index !== action.payload;
      });

      return {
        ...state,
        productList: {
          ...state.productList,
          products: updatedData
        }
      };
    }

    default:
      return state;
  }
};
export default reducer;
