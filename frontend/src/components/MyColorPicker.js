
import React, { useState } from 'react'
// import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import ColorPicker, { useColorPicker } from "react-best-gradient-color-picker"
import { Button } from 'react-bootstrap'

const MyColorPicker = ({ onChange, color, setColor ,setColorO}) => {

    const [display, setDisplay] = useState(false)
    const { getGradientObject } = useColorPicker(color, setColor);

    const handleClick = () => {
        setDisplay(!display)
    };

    const handleClose = () => {
        setDisplay(false)
        handleChange2(color)
    };

    const handleChange = (color) => {
        setColor(color.hex)
        onChange(color.hex)
    };

    const handleChange2 = (color) => {
        setColor(color)
        var sobj = {}
        const obj = getGradientObject();
        setTimeout(()=>{
            if (obj.isGradient) {
                sobj.color = undefined
                const gd = { type: obj.gradientType === "linear-gradient" ? "linear" : "radial" }
                 gd.colorStops= obj.colors.map((c)=>{return {color:c.value,offset:c.left/100}})
                 sobj.gradient=gd;
    
            } else {
                sobj.color = color
                sobj.gradient = undefined
            }
    
            
            console.log(sobj)
            setColorO(sobj)
        },100)
        
    };



    const styles = {


        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '1px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
    };

    return (
        <div>
            <div style={styles.swatch} onClick={handleClick}>
                <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '2px',
                    background: color,
                }} />
            </div>
            {display ? <div style={styles.popover}>
                {/* <div style={styles.cover} onClick={handleClose} /> */}
                {/* <SketchPicker color={color} onChange={handleChange} /> */}
                <div className='bg-white p-2 rounded'>
                    <div className='d-flex'>
                        <span className='mr-auto'></span>
                        <div className=''>
                            <Button className='btn-sm btn-success px-5 m-1 mb-2' onClick={handleClose}>OK</Button>
                        </div>
                    </div>
                    <ColorPicker value={color} onChange={(c) => { handleChange2(c) }} />
                </div>

            </div> : null}

        </div>
    )

}

export default MyColorPicker