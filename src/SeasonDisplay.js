import React from 'react';
import './display.css';

const SeasonConfig = {
    summer: {
        text1: "It is a summer",
        icon1: 'sun outline'
    }, 
    winter: {
        text1: "It is a winter",
        icon1: 'snowflake'
    }
}

const TimeConfig = {
    day:{
        text2: "day",
        icon2: 'sun'
    },
    night: {
        text2: "night",
        icon2: 'moon'
    }
}

const getSeason = (lat, month)=>{
    if(month>2 && month<9){
        return lat > 0 ? 'summer': 'winter';
    } else{
        return lat < 0 ? 'summer': 'winter';
    }
}

const getDayOrNight = (time)=>{
    if(time > 4 && time < 20){
        return 'day'
    }else{
        return 'night'
    }
}

const SeasonDisplay = (props)=>{

    const season = getSeason(props.lat, new Date().getMonth);
    const timeOfTheDay = getDayOrNight(new Date().getHours());
    
    const {text1, icon1} = SeasonConfig[season];
    const {text2, icon2} = TimeConfig[timeOfTheDay];

    return(
    <div className = {`season-display ${season} ${timeOfTheDay}`}>
       <i className = {`icon1 ${icon1} icon massive`}></i>
       <h1> {text1} {text2}</h1>
       <h2>{props.currentTime}</h2>
       <i className = {`icon2 ${icon2} icon massive`}></i>
    </div>
    );
};

export default SeasonDisplay;


//Nothern hemisphere = 0,1,2,9,10,11 winters
//southern = 3,4,5,6,7,8 winter