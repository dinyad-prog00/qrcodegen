import { useEffect } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker"
import { useDispatch, useSelector } from "react-redux";
import { getColor } from "../redux/selectors"
import { getGradientFromString } from "../utils/gradient";

const BottomColorPicker = () => {
    //const { getGradientObject } = useColorPicker(color, setColor);
    const dispatch = useDispatch()
    const colorFor = useSelector((store) => store.context.colorFor)
    const color = useSelector(getColor(colorFor))
    const setColor = (color) => {
        var action = { type: "UPDATE_QR" }
        if (colorFor == "bg") {
            action.payload = { "backgroundOptions.color": color }
        } else if (colorFor == "dots") {
            action.payload = { "dotsOptions.color": color }
        }
        
        dispatch(action)
    }
    const handleChange = (color) => {
        

        setColor(color)
        if (color.substring(0, 6) === "linear" || color.substring(0, 6) === "radial") {
            const gradient = getGradientFromString(color)
            var action = { type: "UPDATE_QR" }
            if (colorFor == "bg") {
                action.payload = { "backgroundOptions.gradient": gradient }
            } else if (colorFor == "dots") {
                action.payload = { "dotsOptions.gradient": gradient }
            }

            dispatch(action)
        } else {
            var action = { type: "UPDATE_QR" }
            if (colorFor == "bg") {
                action.payload = { "backgroundOptions.gradient": undefined }
            } else if (colorFor == "dots") {
                action.payload = { "dotsOptions.gradient": undefined }
            }

            dispatch(action)
            
        }
    };
   
    return (
        <ColorPicker value={color} onChange={handleChange}  height={70} hideInputs={true} hideOpacity={true} hideHue={false} hideAdvancedSliders={true} hideColorGuide={true} hideInputType={true}/>
    )
}

export default BottomColorPicker