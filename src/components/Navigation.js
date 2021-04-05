import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">NotesApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="renponsive-navbar-nav">
                        <Nav defaultActiveKey={window.location.pathname} className="navbar-nav ml-auto">
                            <Nav.Link eventKey="/" as={Link} to="/">Notes</Nav.Link>
                            <Nav.Link eventKey="/create" as={Link} to="create">Create Note</Nav.Link>
                            <Nav.Link eventKey="/user" as={Link} to="/user">Create User</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        )
    }
}
