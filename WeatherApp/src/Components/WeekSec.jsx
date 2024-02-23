import React, { useState, useEffect } from 'react'

import cloudy from '../assets/cloudy_img.png'
import sunny from '../assets/sunny_img.png'
import rainy from '../assets/rainy_img.png'
import snowy from '../assets/snowy_img.png'
import moon from '../assets/moon_img.png'
import sunnyCloudy from '../assets/sunny_cloudy_img.png'

export default function WeekSec({ data }) {
    const forecasts = []

    const [weatherImg, setWeatherImg] = useState(snowy)

    // const [cardTemp, setCardTemp] = useState(0)

    for (let i = 0; i < data.list.length; i += 8) {
        const time = data.list[i].dt;
        const date = new Date(time * 1000);
        const day = date.getDay();
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const readableDay = days[day];

        let cardTemp = Math.ceil(data.list[i].main.temp - 273.15);

        useEffect(() => {

            if (data.list[i].weather[0].main == "Snow") {
                setWeatherImg(snowy)
            }
            else if (data.list[i].weather[0].main == "Clouds") {
                setWeatherImg(cloudy)
            }
            else if (data.list[i].weather[0].main == "Rain") {
                setWeatherImg(rainy)
            }
            else if (data.list[i].weather[0].main == "Clear") {
                setWeatherImg(sunny)
            }
            else {
                setWeatherImg(sunnyCloudy)
            }
        }, [data, i])

    forecasts.push(
        <div className='right-week-card' key={i}>
            <h5>{readableDay}</h5>
            <img src={weatherImg} alt="" />
            <p>{cardTemp}°c</p>
        </div>
    );
}


return (
    <>
        <div className="right-week">
            <h4>Next Five Day</h4>
            <div className='right-week-card-container'>

                {forecasts}
            </div>

            {/* <div className='right-week-card'>
                    <h5>{readableDay}</h5>
                </div>
                <div className='right-week-card'></div>
                <div className='right-week-card'></div>
                <div className='right-week-card'></div>
                <div className='right-week-card'></div>
                <div className='right-week-card'></div>
                <div className='right-week-card'></div> */}
        </div>
    </>
)
}
