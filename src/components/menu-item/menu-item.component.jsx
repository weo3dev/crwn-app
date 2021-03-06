import React from "react";

import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div  className={`menu-item ${size}`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>
)

export default MenuItem;