import Footer from "./Footer"
import Header from "./Header"
import SideNav from "./Sidenavs"
import UnderHeader from "./UnderHeader"
import { useDispatch, useSelector } from "react-redux"
import "../../App.css"
import QRCodeStyling from 'styled-qr-code';
import { useEffect, useRef } from "react"
import BottomColorPicker from "../BottomColorPicker"
import useHistory from "../../hooks/history"

const qrCode = new QRCodeStyling({ data: "dinyad.fr", height: 300, width: 300 });


const Dashboard = () => {
    const qrRef = useRef()

    

    const qrProps = useSelector((store) => store.qrProps)
    const download = useSelector((store) => store.context.download)
    const showBtColorPicker = useSelector((store) => store.context.showBtColorPicker)
    const dispatch = useDispatch()
    const  history = useHistory()

    useEffect(() => {
        qrCode.append(qrRef.current)
    }, [])

    useEffect(() => {
        qrCode.update(qrProps)
    }, [qrProps])

    useEffect(() => {
        if (download) {
            qrCode.download({ name: "dinyad-qr", extension: "jpeg" })
            dispatch({ type: "UPDATE_CONTEXT", payload: { download: false } })
        }
    // eslint-disable-next-line
    }, [download])

    return (

        <div className=" vw-100 vh-100  d-flex flex-column container-fluid p-0 m-0">
            <Header/>
            <div className="vh-100">
                <div className="d-flex h-100">
                    <div className="mh-100 d-none d-sm-block">
                        <SideNav />
                    </div>
                    <div className="d-flex flex-column w-100">
                        <UnderHeader history={history}/>
                        <div className="my-auto qr-body h-100 text-center d-flex flex-column" onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: false ,showShapePicker:false} })}>
                            <div className="my-auto" onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showBtColorPicker: false } })}>
                                <div ref={qrRef}></div>
                            </div>
                            {showBtColorPicker &&
                                <div className="d-flex bg-white py-2 rounded-top d-sm-none">
                                    <div className="mx-auto">
                                        <BottomColorPicker />
                                    </div>
                                </div>}
                        </div>
                        <Footer history={history} />
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Dashboard