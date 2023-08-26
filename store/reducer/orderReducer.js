import {
  SaveOrderOfAUserDetail,
  SaveAllOrdersOfAUserDetail,
  SaveSingleOrderDetail,
} from "../types";
const initialValues = {
  orderDetail: [],
  orderCount: 0,
};
const orderReducer = (state = initialValues, action) => {
  switch (action.type) {
    case SaveOrderOfAUserDetail:
      // console.log("rrrrrrrrrrr==>>>", action.value);
      return {
        ...state,
      };
    case SaveAllOrdersOfAUserDetail:
      // console.log("zzzzzzzzzzzzz==>>>", action.value.orders);
      // console.log("zzzzzzzzzzzzz==>>>", action.value.orderCount);
      const allorders = action.value.orders;
      const orderCount = action.value.orderCount;
      return {
        ...state,
        orderDetail: [...allorders],
        orderCount: orderCount,
      };
    case SaveSingleOrderDetail:
      console.log("zzzzzzzzzzzzz==>>>", action.value);
      const data = action.value;
      return {
        ...state,
        orderDetail: [data],
      };
    default:
      return {
        ...state,
      };
  }
};

export default orderReducer;
