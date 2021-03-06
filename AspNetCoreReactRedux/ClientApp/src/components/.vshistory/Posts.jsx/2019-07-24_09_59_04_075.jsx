﻿import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CircularProgress from '@material-ui/core/CircularProgress';

const images = require.context('../../public/images', true);

//Material-UI's styling
const styles = theme => ({
    root: {
        border: 0,
        borderRadius: 3,
        color: 'grey',
        padding: '0 10px',
        marginTop: '10px 0',
        padding: '5px 0',
        flexGrow: 1,
    },
    back: {
        background: 'lightGray',
    },
});

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        };
    }

    componentDidUpdate(prevProps) {

    }
    render() {
        const { classes } = this.props;
        if (this.state.ready) {
            if (this.props.books.length == 0) {
                return (<div>  No result!</div>);
            } 
        } else {
            return <div />;
        }
        this.setState({ ready: true });
        return (
            <div>
                <Grid container spacing={40} justify="space-between" >
                    {this.props.books.map(post => (
                        <Grid item key={post.title} xs={"auto"} className={classes.root}>
                            <Card className={classes.back}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography component="p">{post.description}</Typography>
                                        <Typography component="p"><b>Author:</b> {post.author}</Typography>
                                        <Typography component="p"><b>Genre:</b> {post.genre}</Typography>
                                        <Typography component="p"><b>Publish date:</b> {post.publish_date}</Typography>
                                        <Typography component="p"><b>Price:</b> {post.price}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        books: state.reducer.booksList
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Posts));