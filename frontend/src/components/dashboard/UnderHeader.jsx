import ColorButton from "../ColorButton"
import TextInput from "../TextInput"

import { useDispatch, useSelector } from "react-redux"


const UnderHeader = () => {
    const dispatch = useDispatch()
    const bgColor = useSelector((store) => store.qrProps.backgroundOptions.color)
    const fgColor = useSelector((store) => store.qrProps.dotsOptions.color)
    const link = useSelector((store) => store.qrProps.data)
    return (
        <div className="underheader mw-100 row">
            <div className="col h-100 d-flex align-items-center">
                <div className="d-flex">
                    <div className="p-2" title="Background color"><ColorButton color={bgColor} onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: true, colorFor: "bg" } })} /></div>
                    <div className="p-2" title="Dots color"><ColorButton color={fgColor} onClick={() => dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: true, colorFor: "dots" } })} /></div>
                </div>
            </div>
            <div className="col-8 col-md-3 h-100 d-flex align-items-center">
                <input class="form-control form-control-sm" type="text" defaultValue={link} onChange={(e) => dispatch({ type: "UPDATE_QR", payload: { data: e.target.value } })}/>
                {/* <TextInput name="Link" onChange={(v) => dispatch({ type: "UPDATE_QR", payload: { data: v } })} defaultValue={link} />*/}
            </div>
        </div>
    )

}

export default UnderHeader