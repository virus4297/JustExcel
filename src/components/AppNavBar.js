import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Button,
    Form, Input
} from 'reactstrap';

const AppNavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggle = () => setIsOpen(!isOpen);
    const GetSearchText = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <Navbar light expand="md">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand className="ml-4" href="/" id="brand"><h2 >Excel Classes</h2></NavbarBrand>
                
                <Form className="d-flex" >
                        <Input type='text' placeholder="Search Courses" onChange={GetSearchText} value={searchText} />
                        <Button type="submit">Search</Button>
                </Form>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink id='navbtn' href="/login"><h5 id="navlink">Log In</h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id='navbtn' href="/signup"><h5 id="navlink">Sign Up</h5></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default AppNavBar;