import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography'
const NavBar = () => {
    return (
        <div>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit" >
                        Book Search Api
                </TypoGraphy>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;