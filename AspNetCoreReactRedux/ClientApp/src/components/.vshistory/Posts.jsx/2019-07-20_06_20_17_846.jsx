﻿import React, { Component } from 'react';
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const images = require.context('../../public/images', true);

//Material-UI's styling
const styles = theme => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        margin: '15px 0',
   
    },
    listItemText: {
        fontSize: '0.7em',//Insert your required size
    }

});

export class Posts extends Component {
    constructor() {
        super();
    }

    componentDidUpdate(prevProps) {

    }
    render() {
        const { classes } = this.props;
        return (
            <div style={{ marginTop: 20, padding: 30 }}>
                <Grid container spacing={40} justify="center">
                    {this.props.books.map(post => (
                        <Grid item key={post.title} Box width={1 / 4}>
                            <Card>
                                <CardActionArea>
                                  
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                        </Typography>
                                        <Typography component="p">{post.description}</Typography>
                                        <Typography component="p">{post.author}</Typography>
                                        <Typography component="p">{post.genre}</Typography>
                                        <Typography component="p">{post.publish_date}</Typography>
                                        <Typography component="p">{post.price}</Typography>

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