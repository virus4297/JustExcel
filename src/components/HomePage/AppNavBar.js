import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Button,
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
                <Link to="/" id="brand"><p>Excel Classes</p></Link>
                <Form className="ml-2 d-flex"id="searchForm" >
                    <Input type='text' placeholder="Search Courses" onChange={GetSearchText} value={searchText} />
                    <Button type="submit" id="searchBtn">Search</Button>
                </Form>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="pt-2">
                            <Link to="/login" id="navlink">Log In </Link>
                        </NavItem>
                        <NavItem className="pt-2"> 
                            <Link to="./signup" id="navlink">Sign Up </Link>
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