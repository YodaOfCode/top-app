import React from 'react';
import cn from 'classnames';
import {SidebarProps} from "./Sidebar.props";

const Sidebar = ({...props}: SidebarProps): JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};

export default Sidebar;
