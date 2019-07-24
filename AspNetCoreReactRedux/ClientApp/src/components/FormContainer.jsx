import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { actionCreators } from '../store/ContainerReducer';

const marginStyle = {
    marginTop: '30px'
};

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            localBook: {
                title: "",
                author: "",
                genre: "",
                price: ""
            },
        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleGenre = this.handleGenre.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleTitle(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                localBook: {
                    ...prevState.localBook,
                    title: value
                }
            }),
            () => console.log(this.state.localBook)
        );
    }

    handleAuthor(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                localBook: {
                    ...prevState.localBook,
                    author: value
                }
            }),
            () => console.log(this.state.localBook)
        );
    }

    handleGenre(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                localBook: {
                    ...prevState.localBook,
                    genre: value
                }
            }),
            () => console.log(this.state.localBook)
        );
    }

    handlePrice(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                localBook: {
                    ...prevState.localBook,
                    price: value
                }
            }),
            () => console.log(this.state.localBook)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.props.requestBooks(this.state.localBook);
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            localBook: {
                title: "",
                author: "",
                genre: "",
                price: ""
            }
        });
    }

    render() {
        return (
            <div style={marginStyle}>
                <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                    <Input
                        inputType={"text"}
                        title={"Title"}
                        name={"title"}
                        value={this.state.localBook.title}
                        placeholder={"Enter Title"}
                        handleChange={this.handleTitle}
                    />{" "}
                    {/* Title */}
                    <Input
                        inputType={"text"}
                        title={"Author"}
                        name={"author"}
                        value={this.state.localBook.author}
                        placeholder={"Enter Author"}
                        handleChange={this.handleAuthor}
                    />{" "}
                    {/* Author */}
                    <Input
                        inputType={"text"}
                        title={"Genre"}
                        name={"genre"}
                        value={this.state.localBook.genre}
                        placeholder={"Enter Genre"}
                        handleChange={this.handleGenre}
                    />{" "}
                    {/* Genre */}
                    <Input
                        inputType={"text"}
                        title={"Price"}
                        name={"price"}
                        value={this.state.localBook.price}
                        placeholder={"Enter Price"}
                        handleChange={this.handlePrice}
                    />{" "}
                    {/* Price */}
                    <Button
                        action={this.handleFormSubmit}
                        type={"primary"}
                        title={"Submit"}
                        style={buttonStyle}
                    />{" "}
                    {/*Submit */}
                    <Button
                        action={this.handleClearForm}
                        type={"secondary"}
                        title={"Clear"}
                        style={buttonStyle}
                    />{" "}
                    {/* Clear the form */}
                </form>
            </div>
        );
    }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
};

export default connect(
    null,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(FormContainer);
