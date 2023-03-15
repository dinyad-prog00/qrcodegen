import logo from './logo.svg';
import './App.css';
import { Button, Form } from 'react-bootstrap';
import { SketchPicker, } from 'react-color';
import { useEffect, useRef, useState } from 'react';
import MyColorPicker from './components/MyColorPicker';
import ColorInput from './components/ColorInput';
import TextInput from './components/TextInput';
import QRCodeStyling from 'styled-qr-code';
const qrCode = new QRCodeStyling({ data: "dinyad.fr" ,height:300,width:300});

function App() {
  const [link, setLink] = useState("www.dinyad.fr")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [bgColorO, setBgColorO] = useState({color:"#ffffff"})
  const [fgColor, setFgColor] = useState("#000000")
  const [fgColorO, setFgColorO] = useState("#000000")

  const qrRef = useRef()

  
  useEffect(() => {
    qrCode.append(qrRef.current)
  }, [])

  useEffect(() => {
    
    qrCode.update({
      
      data: link,
      backgroundOptions: {
        ...bgColorO
        
      }, dotsOptions: {
        ...fgColorO,
        //color: fgColor,gradient : {type:"linear",colorStops : [{offset:0,color : "blue"},{offset:1,color : "white"}]}

      }
    })
  }, [link, fgColor, bgColor])

  return (
    <div className="App">
      <header className="App-header">
        <div className='col-md-6 offset-md-3 pt-5'>
          <h1 children="mb-5">Dinyad QR Code Generator</h1>
          <div className='row'>
            <div className='col-md-6'>
              <div className='col-md-10 offset-md-1'>
                <Form>
                  <TextInput name="Lien" onChange={(t) => setLink(t)} defaultValue="www.dinyad.fr" />
                  <ColorInput name="Bg color" defaultColor='#000000' onChange={(c) => setBgColor(c)} setColorO={setBgColorO} />
                  <ColorInput name="Fg color" defaultColor='#ffffff' onChange={(c) => setFgColor(c)}  setColorO={setFgColorO}/>
                </Form>
              </div>
            </div>
            <div className='col-md-6'>
              <div ref={qrRef}></div>
              <div>
                <Button onClick={()=>qrCode.download({name: "qrcode",extension:"png"})}>Download</Button>
              </div>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
