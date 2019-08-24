import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        { /*hardcoding the src would not work because of our workflow with webpack.
        That's why we 'import' the logo file. Webpack will take care of the rest.*/}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;