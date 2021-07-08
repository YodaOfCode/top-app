import React from 'react';
import cn from 'classnames';
import {FooterProps} from "./Footer.props";

const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <div className={cn( {

        })} {...props}

        >
            Footer
        </div>
    );
};

export default Footer;
