import { useEffect } from "react";
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker"
import { useDispatch, useSelector } from "react-redux";
import { getGradientFromString } from "../utils/gradient";

const SideColorPicker = ({ color, setColor }) => {
    //const { getGradientObject } = useColorPicker(color, setColor);
    const dispatch = useDispatch()
    const colorFor = useSelector((store) => store.context.colorFor)
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
        <ColorPicker value={color} onChange={handleChange} />
    )
}

export default SideColorPicker