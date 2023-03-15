import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import Nav from 'react-bootstrap/Nav';
import Sidepanel from './Sidepanel';
import { AiFillAppstore, AiFillPicture } from "react-icons/ai"
import { RxBoxModel } from "react-icons/rx"

const SideNav = ({ }, ref) => {
    const [selected, setSelected] = useState("1")
    const [panelOpened, setPanelOpened] = useState(true)
    
    const handleSelect = (eventKey) => { setSelected(eventKey); setPanelOpened(true) };
    
    return (
        <div className='d-flex h-100'>
            <div className='bg-dark mh-100 sidemenu '>
                <Nav activeKey={selected} className='flex-column' onSelect={handleSelect}>

                    <Nav.Item>
                        <Nav.Link eventKey="1" className='my-3'><RxBoxModel size={30} color={selected == "1" ? "purple" : "white"} /> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" className='my-3'><AiFillAppstore size={30} color={selected == "2" ? "purple" : "white"} /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" className='my-3'>
                            <AiFillPicture size={30} color={selected == "3" ? "purple" : "white"} />
                        </Nav.Link>
                    </Nav.Item>

                </Nav>
            </div>
            <div className='mh-100'>
                <Sidepanel selected={selected} panelOpened={panelOpened} setPanelOpened={setPanelOpened} />
            </div>
        </div>
    );
}

export default SideNav;