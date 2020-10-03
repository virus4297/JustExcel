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
            <Navbar light expand="md" id="navbar">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand href="/" id="brand"><p>Excel Classes</p></NavbarBrand>
                <Form className="d-flex"id="searchForm" >
                    <Input type='text' placeholder="Search Courses" onChange={GetSearchText} value={searchText} />
                    <Button type="submit" id="searchBtn">Search</Button>
                </Form>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/login" id="navlink">Log In </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup" id="navlink">Sign Up </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <img src="https://www.aigtechnologies.in/images/products/elearning-management-system-details.jpg" id="image" alt="..." />
            <div className="mr-5 float-right" id="ImageText" style={{position:"relative",bottom:"5rem"}}>Excel Commerce Classes</div>
        </div>
    );
}

export default AppNavBar;