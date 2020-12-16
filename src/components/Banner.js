import React from 'react'
import {Button} from '@material-ui/core';
import './css/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Online Experiences for the Holidays</h1>
                <h5>Interactive activities we can do together, led by one-of-a-kind hosts.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
