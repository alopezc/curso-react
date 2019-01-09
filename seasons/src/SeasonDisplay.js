import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Vamos a la playa?',
        icon: 'sun'
    },
    winter: {
        text: 'Hace frio?',
        icon: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }

    return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = props => {
    let season = getSeason(props.lat, new Date().getMonth());
    let { text, icon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${icon} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;
