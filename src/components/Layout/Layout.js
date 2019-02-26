import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, BackDrop</div>
        <main>
            {/*Component we wrap with this layout.. */}
            {props.children}
        </main>
    </Aux>
);

export default layout;