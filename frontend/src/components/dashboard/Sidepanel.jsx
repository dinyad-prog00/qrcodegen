import { useState, forwardRef, useImperativeHandle, useEffect } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { getColor } from "../../redux/selectors"
import SideColorPicker from "../SideColorPicker"

const Sidepanel = ({ selected, panelOpened, setPanelOpened }) => {

    const showColorPicker = useSelector((store) => store.context.showColorPicker)
    const colorFor = useSelector((store) => store.context.colorFor)
    const color = useSelector(getColor(colorFor))
   
    const dispatch = useDispatch()

    const setColor = (color) => {
        var action = { type: "UPDATE_QR" }
        if (colorFor == "bg") {
            action.payload = { "backgroundOptions.color": color }
        } else if (colorFor == "dots") {
            action.payload = { "dotsOptions.color": color }
        }
        
        dispatch(action)
    }

    return (
        <>
            {(showColorPicker || panelOpened) && <div className="sidepanel h-100 position-relative">
                <div className="h-100 sidepanel-child1 w-100 d-flex justify-content-center pt-3">
                    {showColorPicker && <SideColorPicker color={color} setColor={setColor} />}
                </div>

                <div className="position-absolute top-50 start-100 translate-middle close-arrow d-flex" onClick={() => { setPanelOpened(false); dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: false } }) }}>
                    <IoIosArrowBack size={20} color="black" className="my-auto" />
                </div>

            </div>
            }</>
    )

}

export default Sidepanel