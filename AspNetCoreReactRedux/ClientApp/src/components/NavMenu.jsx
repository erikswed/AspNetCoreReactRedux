import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { booksXml } from '../constants'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = scrollType => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    function handleClose() {
        setOpen(false);
    }
    const classes = useStyles();
    return (
        <div>
            <AppBar color="primary" position="static">
                <Toolbar>
                    <TypoGraphy variant="title" color="inherit" className={classes.title} >
                        React Redux App Book Search Api V7
                   </TypoGraphy>
                    <TypoGraphy variant="title" color="inherit" className={classes.title} >
                        This is a demonstration on how to use an XML file as data source
                   </TypoGraphy>
                    <Button onClick={handleClickOpen('paper')} color="inherit">View DB </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title">
                        <DialogTitle id="scroll-dialog-title">Books XML db</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText>
                                <pre >
                                    {booksXml}
                                </pre>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">Close</Button>
                        </DialogActions>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;