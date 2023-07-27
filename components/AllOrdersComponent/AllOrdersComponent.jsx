import {
    OuterContainer, TableContainer, HeadingContainer,
    Count, Title, Body, TableBody
} from "./AllOrdersStyle"
import { getToken } from "@/utils/localStorage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveAllOrdersOfAUserAction } from "../../store/action/orderAction"
import { AddressParser } from "../../utils/addressParse"
import { useRouter } from "next/router"
import ProtectRouteComponent from "../ProtectRouteComponent/ProtectRouteComponent"
import OrderSuccessModal from "./OrderSuccessfulModal/OrderSuccessfulModalComponent"
const AllOrders = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [closeModal, setCloseModal] = useState(true)
    const allOrders = useSelector((state) => state.order)
    console.log("7777777777777", allOrders)
    const orderCount = useSelector((state) => state.order.orderCount)
    useEffect(() => {
        fetch(`https://novbahaar-backend.onrender.com/order/all?status=active`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "x-access-token": getToken()
            }
        })
            .then((response) => response.json())
            // .then((result) => console.log("rrrrrrrrrrrrrr", result))
            .then((result) => dispatch(saveAllOrdersOfAUserAction(result.response)))
            .catch((error) => console.log({ error }))
    }, [])
    // console.log("bbbbbbbbbbbb", AddressParser())
    const viewDetailHandler = (id) => {
        console.log("inside viewDetailHandler ====>", id)
        router.push(`/orderdetail/${id}`)
    }
    return (
        <>
            {/* <OrderSuccessModal closeModal={setCloseModal}  /> */}
            {closeModal ? <OrderSuccessModal closeModal={setCloseModal} /> : null}
            <Body >
                <OuterContainer>
                    <HeadingContainer>
                        <Title>All Orders</Title>
                        {
                            orderCount <= 9
                                ?
                                <Count>0{orderCount}</Count>
                                :
                                <Count>{orderCount}</Count>
                        }
                        {/* <Count>{orderCount}</Count> */}
                    </HeadingContainer>
                    <TableBody>
                        <TableContainer>
                            <tbody id="customers">
                                <tr>
                                    <th>S.No.</th>
                                    <th>OrderId</th>
                                    <th>Price</th>
                                    <th>Delivery Status</th>
                                    <th>Shipping Address</th>
                                </tr>
                                {
                                    allOrders.orderDetail.map((e, index) => {
                                        return <> <tr className="data">
                                            <td>{index + 1}</td>
                                            <td><p onClick={viewDetailHandler.bind(this, e._id)}>{e._id}</p></td>
                                            <td>₹{e.totalAmount}</td>
                                            <td className="status">{e.deliveryStatus}</td>
                                            <td>{AddressParser(e.address)}</td>
                                            {/* <td>{e.address.address} ,{e.address.pincode} , {e.address.country}</td> */}
                                        </tr>
                                        </>
                                    })
                                }
                            </tbody>
                            {/* {
                    allOrders.orderDetail.map((e) => {
                        // console.log("eeeeeeee", e)
                        return <>  <tbody id="customers" key={e._id}>
                            <tr>
                                <th>orderId</th>
                                <th>Price</th>
                                <th>Delivery Status</th>
                                <th>Shipping Address</th>
                            </tr>

                            <tr>
                                <td>{e._id}</td>
                                <td>{e.totalAmount}</td>
                                <td>{e.deliveryStatus}</td>
                                <td>{e.address.address}</td>
                            </tr>

                        </tbody>
                        </>
                    })
                } */}
                        </TableContainer>
                    </TableBody>

                </OuterContainer >
            </Body>
        </>
    )
}
// export default AllOrders
export default ProtectRouteComponent(AllOrders)