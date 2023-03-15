import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import SideNav from "./Sidenavs"
import Sidepanel from "./Sidepanel"
import UnderHeader from "./UnderHeader"
import { useDispatch, useSelector } from "react-redux"
import "../../App.css"
import QRCodeStyling from 'styled-qr-code';
import { useState, useEffect, useRef } from "react"
import store from "../../redux/store"

const qrCode = new QRCodeStyling({ data: "dinyad.fr", height: 300, width: 300 });


const Dashboard = () => {
    const qrRef = useRef()
   

    //Qr props
    const [link, setLink] = useState("www.dinyad.fr")

    const qrProps = useSelector((store) => store.qrProps)
    const download = useSelector((store)=> store.context.download)
    const dispatch = useDispatch()

    useEffect(() => {
        qrCode.append(qrRef.current)
    }, [])

    useEffect(() => {
        qrCode.update(qrProps)
    }, [qrProps])

    useEffect(()=>{
        if(download){
            qrCode.download({name:"dinyad-qr",extension:"jpeg"})
            dispatch({ type: "UPDATE_CONTEXT", payload: { download: false } })
        }
    },[download])

    return (

        <div className=" vw-100 vh-100  d-flex flex-column container-fluid p-0 m-0">
            <Header />
            <div className="vh-100">
                <div className="d-flex h-100">
                    <div className="mh-100">
                        <SideNav />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <UnderHeader setLink={setLink} rqCode={qrCode} />
                        <div className="my-auto qr-body h-100 text-center d-flex flex-column" onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: false } })}>
                            <div className="my-auto">
                                <div ref={qrRef}></div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Dashboard