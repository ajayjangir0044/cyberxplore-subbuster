import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../components/CSS/headerStyle.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="header_nav">
        <div className="container" style={{padding:0}}>
            <Navbar light expand="md" style={{padding:'auto 0'}}>
                <a href="/"><NavLink style={{color:'black',fontSize:"1.2rem",padding:0,margin:0}} className="font-weight-bold">Subbuster</NavLink></a>
            <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <>
                        <NavItem>
                        <a href="/"><NavLink>Home</NavLink></a>
                        </NavItem>

                        <NavItem>
                            <a href="https://cyberxplore.com"><NavLink>About us</NavLink></a>
                        </NavItem>

                        <NavItem>
                        <a href="https://edu.cyberxplore.com"> <NavLink>Learn Bug Bounty</NavLink></a>
                        </NavItem>
                    </>

                </Nav>
                </Collapse>
            </Navbar>
        </div></div>
    )
}
export default Header