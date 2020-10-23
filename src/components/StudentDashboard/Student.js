import React, { useState, useEffect } from 'react';
import { Button, Nav, NavbarBrand, 
        NavItem, Collapse, NavbarToggler, 
        Navbar, Card, CardBody, CardTitle, 
        CardSubtitle,ListGroup,ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Student(props) {

    const EnrollCourse = [
        {id:1,courseName:'Junior Foundation'},
        {id:2,courseName:'Physics Creash Course'},
        {id:3,courseName:'MBA CAT'}
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState('');
    const toggle = () => setIsOpen(!isOpen);

    const Logout = () => {
        axios.get('/user/logout')
            .then(res => {
                sessionStorage.clear();
                props.history.push('/');
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('/user/user')
            .then(res => {
                setUser(res.data);
            });
    }, []);



    return (
        <div>
            <Navbar id='dashnavbar' light expand="md">
                <NavbarBrand href='/dashboard' id='dashname'>Hi! {user.name}</NavbarBrand>
                <NavbarToggler id='dashtoggler' onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Button id='notification' className="fa fa-bell"> Notifications</Button>
                        </NavItem>
                        <NavItem>
                            <Button id='dashlink'>More Courses</Button>
                        </NavItem>
                    </Nav>
                    <Button id='dashbtn' onClick={Logout}>Logout</Button>
                </Collapse>
            </Navbar>
            <div id='profileCard'>
                <Card>
                    <CardBody>
                        <CardTitle>Name: {user.name}</CardTitle>
                        <CardSubtitle>Email: {user.email}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
            <ListGroup id='courseContainer'>
                <ListGroupItem className=" list-group-item-action" id='dashCourseHeading' tag="a">Enrolled Courses</ListGroupItem>
                {
                    EnrollCourse.map(course=>
                    <ListGroupItem key={course.id}><p id='courseName' to='/#'>{course.courseName}<Link to='#' style={{float:'right',marginRight:'10px'}}>Start</Link></p></ListGroupItem>
                    )
                }
            </ListGroup>
        </div>
    );
}

export default Student;