import React from 'react';
import styles from './Button.module.css';
import {ButtonProps} from "./Button.props";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cn from 'classnames';

const Button = ({appearance, arrow, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <>
            <button className={cn(styles.button, className,
                {
                    [styles.primary]: appearance === 'primary',
                    [styles.ghost]: appearance === 'ghost'
                })}
                    {...props}
            >
                {children}
            </button>
        </>
    );
};

export default Button;
