import React from 'react'
import temperatureIcon from '../assets/temperature_icon.png'
import windIcon from '../assets/wind_icon.png'
import sunIcon from '../assets/sun_icon.png'
import humidityIcon from '../assets/humidity_icon.png'
import pressureIcon from '../assets/pressure_icon.png'
import visiblityIcon from '../assets/visibility_icon.png'

export default function TodaySec({ data }) {

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
                                        <h5>Speed:</h5><p>{data.list[0].wind.speed} km/h</p>
                                    </div>
                                    <div>
                                        <h5>Direction:</h5><p>{data.list[0].wind.deg}°</p>
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
                                        <h5>Sun rise:</h5><p>{sunRise}</p>
                                    </div>
                                    <div>
                                        <h5>Sun set:</h5><p>{sunSet}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='today-card-row'>
                        <div className='today-card'>
                            <h2>Humidity</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={humidityIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Humidity:</h5><p>{data.list[0].main.humidity}%</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='today-card'>
                            <h2>Pressure</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={pressureIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Pressure:</h5><p>{data.list[0].main.pressure}mb</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className='today-card'>
                            <h2>Visibility</h2>
                            <div className="today-card-content">
                                <div className='today-card-img'>
                                    <img src={visiblityIcon} alt="" />
                                </div>
                                <div className='today-card-info'>

                                    <div>
                                        <h5>Visiblity:</h5><p>{data.list[0].visibility}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}
