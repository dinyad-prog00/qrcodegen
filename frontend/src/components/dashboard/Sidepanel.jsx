import { useState, forwardRef, useImperativeHandle, useEffect } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { getColor } from "../../redux/selectors"
import SideColorPicker from "../SideColorPicker"
const Sidepanel = ({ selected, panelOpened, setPanelOpened }) => {

    const showColorPicker = useSelector((store) => store.context.showColorPicker)
    const colorFor = useSelector((store) => store.context.colorFor)
    const color = useSelector(getColor(colorFor))
    const qrProps = useSelector((store)=>store.qrProps)
    const dispatch = useDispatch()

    const setColor = (color)=>{
        var action = {type: "UPDATE_QR"}
        if(colorFor=="bg"){
            var opt = {...qrProps.backgroundOptions}
            opt.color = color
            action.payload = {backgroundOptions : opt}

        }else if(colorFor=="dots"){
            var opt = {...qrProps.dotsOptions}
            opt.color = color
            action.payload = {dotsOptions : opt}
        }

        dispatch(action)
    }

    return (
        <>
            { (showColorPicker || panelOpened) && <div className="sidepanel h-100 position-relative">
                <div className="h-100 sidepanel-child1 w-100 d-flex justify-content-center pt-3">
                    {showColorPicker && <SideColorPicker color={color} setColor={setColor} />}
                </div>

                <div className="position-absolute top-50 start-100 translate-middle close-arrow d-flex" onClick={() => {setPanelOpened(false);dispatch({ type: "UPDATE_CONTEXT", payload: { showColorPicker: false } })}}>
                    <IoIosArrowBack size={20} color="white" className="my-auto" />
                </div>

            </div>
            }</>
    )

}

export default Sidepanel