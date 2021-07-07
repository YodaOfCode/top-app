import React from 'react';
import {PProps} from "./P.props";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cn from 'classnames';
import styles from './P.module.css';

const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <>
            <p className={cn(styles.p, {
                [styles.s]: size === 's',
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
            })}
               {...props}
            >
                {children}
            </p>
        </>
    );
};

export default P;
