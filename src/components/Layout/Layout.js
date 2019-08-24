import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {/*Component we wrap with this layout.. 
                About props.children -->
                The React docs say that you can use props.children on 
            components that represent ‘generic boxes’ and that ‘don’t 
            know their children ahead of time’.
                Whenever this component(Layout) is invoked 
            {props.children} will also be displayed and this is 
            just a reference to what is between the opening and 
            closing tags of the component.(check app.js)*/}
            {props.children}
        </main>
    </Aux>
);

export default layout;