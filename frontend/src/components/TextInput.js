import { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import MyColorPicker from "./MyColorPicker"

const TextInput = ({ name ,onChange,defaultValue}) => {
    const [text, setText] = useState(defaultValue)
    useEffect(()=>{
        onChange(text)
    },[text])
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text">{name}</span>
            </div>
            <Form.Control value={text}  onChange={(e) =>{ e.preventDefault();setText(e.target.value)}}/>
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

export default TextInput