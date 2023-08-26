import allorders from "@/pages/allorders";
import { useSelector } from "react-redux";

// console.log("7777777777777", allOrders);
export const AddressParser = (data) => {
  let parseAddress = "";
  // console.log("444444444444444", data);
  parseAddress = data?.address + " " + data?.country + " ," + data?.pincode;
  return parseAddress;
};
// export default AddressParser;
