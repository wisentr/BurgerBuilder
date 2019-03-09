import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) =>{
    /* Object.keys(props.ingredients) extracts the keys of the props.ingredients, such as
[cheese,meat,salad,bacon]
    first map method, takes that array of ingredients, iterates through every element by
checking their values with the syntax props.ingredients[ingredientKey] to determine how many
of such ingredients exist in the props. 
    For example, if there are 5 cheese in the props, first map method will create an array of
5 undefined items in it, and spreads them into a new array, and the result looks like 
[undefined, undefined, undefined, undefined, undefined], the length is important here, because
it tells how many of such ingredient is going to be added to the burger
    then I chain another map method on [undefined, undefined, undefined, undefined, undefined]
and iterate it 5 times for example, and render 5 BurgerIngredient components with unique keys
such as key='cheese5' and types such as type='cheese'
    */
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        });
    }).reduce((acc, curr) => {
        return acc.concat(curr);
    }, []);
    console.log(transformedIngredients);

    if(transformedIngredients.length === 0 ){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;