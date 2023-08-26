import { Router, useRouter } from "next/router"
import { getToken } from "../../utils/localStorage"
import { useEffect } from "react"
const ProtectRouteComponent = (Component) => {
    // console.log("hhhhhhhhh", component)
    return function ProtectRoute() { //funcrtion component 
        const router = useRouter()
        // console.log("p-router", router)
        const token = getToken()
        useEffect(() => {
            if (!token) {
                console.log("inside tho token functuon,token", token)
                return router.push("/login")
            }
        }, [])
        return <Component />
    }
}
export default ProtectRouteComponent