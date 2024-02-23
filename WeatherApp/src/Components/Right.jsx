import React from 'react'
import temperatureIcon from '../assets/temperature_icon.png'
import windIcon from '../assets/wind_icon.png'
import sunIcon from '../assets/sun_icon.png'

export default function Right({ data }) {

    const options = { hour: 'numeric', minute: '2-digit', hour12: true }

    let sunSet = new Date((data.list[0].dt + data.city.sunset) * 1000)
    sunSet = new Intl.DateTimeFormat('en-US', options).format(sunSet)

    let sunRise = new Date((data.list[0].dt + data.city.sunrise) * 1000)
    sunRise = new Intl.DateTimeFormat('en-US', options).format(sunRise)

    return (
        <>
            <div className="right-today">
                <h4>Today's Highlights</h4>
                <div className='today-card-row-container'>
                    <div className='today-card-row'>
                        <div className='today-card'>
                            <h2>Temperature</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={temperatureIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Feels like:</h5><p>{Math.ceil(data.list[0].main.feels_like - 273.15)}°c</p>
                                    </div>
                                    <div>
                                        <h5>Max temp:</h5><p>{Math.ceil(data.list[0].main.temp_max - 273.15)}°c</p>
                                    </div>
                                    <div>
                                        <h5>Min temp:</h5><p>{Math.ceil(data.list[0].main.temp_min - 273.15)}°c</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='today-card'>
                            <h2>Wind</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={windIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Speed:</h5><p>{ data.list[0].wind.speed } km/h</p>
                                    </div>
                                    <div>
                                        <h5>Direction:</h5><p>{ data.list[0].wind.deg }°</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='today-card'>
                            <h2>Sun Set & Rise</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={sunIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Sun rise:</h5><p>{ sunRise }</p>
                                    </div>
                                    <div>
                                        <h5>Sun set:</h5><p>{ sunSet }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='today-card-row'>
                        <div className='today-card'></div>
                        <div className='today-card'></div>
                        <div className='today-card'></div>
                    </div>
                </div>
            </div>
            <div className="right-week">

            </div>
        </>
    )
}
