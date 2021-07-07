import React from 'react';
import {TagProps} from "./Tag.props";
import styles from './Tag.module.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import cn from 'classnames';

const Tag = ({size = 'm', children, href, color = 'ghost', className, ...props}: TagProps): JSX.Element => {
    return (
        <div className={cn(styles.tag, className, {
            [styles.p]: size === 's',
            [styles.p]: size === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.grey]: color === 'grey',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })}
             {...props}
        >
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};

export default Tag;
