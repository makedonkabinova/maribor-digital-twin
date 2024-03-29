import React, {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Meal(props) {
    const meal = props.meal;

    async function deleteMealHandler() {
        await fetch("http://localhost:5000/meal/" + meal._id, {
            method: "DELETE"
        });
        props.refreshRestaurant();
    }


    return (
        <div className="row">
            <div className="col-8" style={{textAlign: "left"}}>

                <span style={{fontSize: "25px"}}>{meal.name}</span>

                <span className="badge badge-primary"
                      style={{backgroundColor: "#3498DB", marginLeft: "15px"}}>{meal.size}</span>
                <div>
                    {meal.allergens.length !== 0 && <span style={{marginLeft: "15px"}}>allergens:</span>}
                    {meal.allergens.map(allergen => (<span key={allergen._id} className="badge" style={{
                        backgroundColor: "grey",
                        marginLeft: "15px"
                    }}>{allergen.title}</span>))}
                </div>

            </div>
            <div className="col-4" style={{textAlign: "right"}}>
                {meal.category.map(category => (<span key={category._id} className="badge" style={{
                    backgroundColor: "#3498DB",
                    marginLeft: "15px"
                }}>{category.title}</span>))}
                <div style={{margin: "5px"}}>
                        <span style={{
                            fontSize: "23px",
                            color: "green",
                            verticalAlign: "middle",
                            padding: "5px"
                        }}><b>{meal.price}$</b></span>
                    {props.useFor === "meal" && (
                        <button className="btn btn-danger" onClick={deleteMealHandler}><DeleteIcon/>&nbsp;Delete</button>)}

                </div>
            </div>
        </div>
    );
}

export default Meal;