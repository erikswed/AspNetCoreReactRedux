import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import '../../node_modules/primereact/resources/primereact.css';
import '../../node_modules/primereact/resources/themes/nova-dark/theme.css';
import NavMenu from './NavMenu';

export default props => (
    <div>
        <NavMenu />
        <Container>
            <Row>
                <Col>{props.children[0]}</Col>
                <Col>{props.children[1]}</Col>
            </Row>
            <Row>
                <Col>{props.children[2]}</Col>
            </Row>
        </Container>
    </div>
);
