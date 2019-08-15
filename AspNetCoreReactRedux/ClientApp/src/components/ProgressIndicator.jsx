import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export class ProgressIndicator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.progress) {
            return (
                <div>
                    <CircularProgress  />
                </div>
            );
        }
        return (
            <div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        progress: state.reducer.progress
    }
}

export default connect(mapStateToProps)(ProgressIndicator);