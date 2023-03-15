import ColorButton from "../ColorButton"

import { useDispatch, useSelector } from "react-redux"
const Footer = () => {
    const dispatch = useDispatch()
    const bgColor = useSelector((store) => store.qrProps.backgroundOptions.color)
    const fgColor = useSelector((store) => store.qrProps.dotsOptions.color)
    const link = useSelector((store) => store.qrProps.data)
    return (
        <div className="footer mw-100">
            <div className="col h-100 d-flex align-items-center">
                <div className="d-flex d-sm-none">
                    <div className="p-2" title="Background color"><ColorButton color={bgColor} onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showBtColorPicker: true, colorFor: "bg" } })} /></div>
                    <div className="p-2" title="Dots color"><ColorButton color={fgColor} onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showBtColorPicker: true, colorFor: "dots" } })} /></div>
                </div>
            </div>
        </div>
    )

}

export default Footer