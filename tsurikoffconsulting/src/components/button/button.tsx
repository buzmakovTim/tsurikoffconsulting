import React from 'react';
import './button.scss';

export const Button = (props: {name: string}) => {

    return (
        <div className="button">
            <p>{props.name}</p>
        </div>
    )
}

