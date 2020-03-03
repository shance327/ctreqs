import React, {Component} from 'react';
import {lightgray} from "color-name";

// component for displaying basic recipes info to a page.
// recipe detail component maps received information into the recipeDet object
const recipeDetail = ({ recipeDetail }) => {
    return (
        <div>
            <h1>Recipe List</h1>

            {recipeDetail.map((recipeDet) => (
                <div class = "card" style = {{ boxShadow: '2px 2px 2px 2px lightgray',
                    transition: 0.5, width: '50%', margin: 'auto' }}>
                <div class="card-body">
                    <h2 class="card-title" style = {{ textAlign: "center", marginTop: 10 }}> {recipeDet.name} [{recipeDet.id}]</h2>
                    <p class="card-text" style = {{ textAlign: "center", textSize: 10, fontFamily: 'Sans-Serif'}}>{recipeDet.instructions}</p>
                    <img src = {recipeDet.imgUrl}
                         style={{ width: "20%", height: "20%", borderRadius: 20,
                                    boxShadow: '2px 2px 2px 2px lightgray',
                                    marginBottom: 5}}/>
                </div>
                </div>
            ))}
        </div>
    )}
export default recipeDetail
