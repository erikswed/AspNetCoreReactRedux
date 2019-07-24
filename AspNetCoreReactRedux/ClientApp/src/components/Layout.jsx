import React from 'react';
import { Container } from 'reactstrap';
import '../../node_modules/primereact/resources/primereact.css';
import '../../node_modules/primereact/resources/themes/nova-dark/theme.css';
import NavMenu from './NavMenu';

export default props => (
    <div>
        <NavMenu />
        <Container>
            {props.children}
        </Container>
    </div>
);
