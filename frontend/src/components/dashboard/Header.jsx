
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdDownloadForOffline } from 'react-icons/md';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch()
    return (
        <Navbar className='header'>
            <Container className='ms-3'>
                <Navbar.Brand href="#home" className='text-white'>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                    DyQRCode
                </Navbar.Brand>
            </Container>
            <Nav.Link className='float-right me-3' onClick={(e) => { dispatch({ type: "UPDATE_CONTEXT", payload: { download: true } }) }}><MdDownloadForOffline color='white' size={30} /></Nav.Link>
        </Navbar>
    )

}

export default Header