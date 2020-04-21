import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './RecipeOverlay.css'

export default class RecipeOverlay extends Component {
    state = {
        open: false,
        recipeInfo: [],
        ingredientsList: ''
    }

    setupDisplay(){
        this.handleToggle();
        this.callRecipeInfo(this.props.recipeId);
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    findIngredients() {
        {this.state.recipeInfo.ingredientsInRecipe.map((ingredients, index) => {
            if (ingredients.unit == null) {
                ingredients.unit = '';
            }
            this.state.ingredientsList = this.state.ingredientsList + '\n' + ingredients.measure + ' ' + ingredients.unit + ' ' + ingredients.ingredientName
        })}
    }
    callRecipeInfo(id) {
        let infoUrl = `/v1/recipe-all/${id}`;
        fetch(infoUrl)
            .then(response => {
                return response.json();
            })
            .then(jsonData => {
                this.setState({ recipeInfo: jsonData });
            });
    }

    render() {
        const {open} = this.state
        if (this.state.recipeInfo.ingredientsInRecipe && this.state.recipeInfo.ingredientsInRecipe.length > 0) {
            if (this.state.ingredientsList === '') {
                this.findIngredients();
            }
            return (<Fragment>
                    <div className="imgBox"><img src={this.props.recipeImg} height="100px" width="100px"/></div>
                    <Button className="recipeButton" color="primary" onClick={() => this.setupDisplay()} size="large">
                        <div className="recipeName">{ this.props.recipeName }</div>
                    </Button>
                    <Dialog id="recipeDialog" open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">
                            { this.state.recipeInfo.recipeName }
                        </DialogTitle>
                        <DialogContent>
                            <div id="container">
                                <DialogContentText>
                                    <img src={this.state.recipeInfo.imgUrl} height="150px" width="150px"/>
                                </DialogContentText>
                                <DialogContentText id="ingredientsList">
                                    <b>Ingredients:</b> {this.state.ingredientsList}
                                </DialogContentText>
                            </div>
                            <div id="recipeInfoList">
                                <DialogTitle id="instructionsTitle">
                                    Instructions:
                                </DialogTitle>
                                <DialogContentText>
                                    { this.state.recipeInfo.instructions }
                                </DialogContentText>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleToggle}>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Fragment>
            )
        }
        else {
            return (
            <Fragment>
                <div className="imgBox"><img src={this.props.recipeImg} height="100px" width="100px"/></div>
                <Button className="recipeButton" color="secondary" onClick={() => this.setupDisplay()} size="large">
                    <div className="recipeList">{ this.props.recipeName }</div>
                </Button>
            </Fragment>
            )
        }

    }
}

