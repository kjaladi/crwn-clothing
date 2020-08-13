import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, location,match }) => {
    
    return (

        <div onClick={
            () => {
                history.push(`${match.url}${linkUrl}`)
            }}
            className={`${size} menu-item`}>
            
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }} >
            </div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>

        </div>
    );
}

export default withRouter(MenuItem);