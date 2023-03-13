import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import MyColorPicker from "./MyColorPicker"

const ColorInput = ({ name, defaultColor = "#000000", onChange,setColorO }) => {
    const [color, setColor] = useState(defaultColor)
    useEffect(() => {
        onChange(color)
    }, [color])
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{name}</span>
            </div>
            <Form.Control value={color} onChange={(e) => setColor(e.target.value)} maxLength="7" />

            <div className="input-group-append">
                <span className="input-group-text m-0 p-0 px-1"><MyColorPicker onChange={(col) => setColor(col)} color={color} setColor={setColor} setColorO={setColorO} /></span>
            </div>
        </div>
        // <div className="d-flex ">
        //     <div color="mr-auto">
        //         <Form.Control value={color} onChange={(e)=>setColor(e.target.value)} maxLength="7"/>
        //     </div>
        //     <div className="m-1">
        //         
        //     </div>


        // </div>
    )
}

export default ColorInput