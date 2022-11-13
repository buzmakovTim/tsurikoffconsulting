import React from 'react';
import './button.scss';

export const Button = (props: {name: string, smallSize?: boolean}) => {

    const buttonClass = props.smallSize === true ? "button small" : "button";
    return (
        <div className={buttonClass}>
            <p>{props.name}</p>
        </div>
    )
}

