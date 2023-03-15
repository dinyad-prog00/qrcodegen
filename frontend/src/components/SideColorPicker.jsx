import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker"

const SideColorPicker = ({ color, setColor }) => {

    const handleChange = (color) => {
        setColor(color)
        //onChange(color.hex)
    };
    return (
        <ColorPicker value={color} onChange={handleChange}/>
    )
}

export default SideColorPicker