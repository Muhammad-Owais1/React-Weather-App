import React, { useEffect, useState } from 'react'
import cloudy from '../assets/cloudy_img.png'
import sunny from '../assets/sunny_img.png'
import rainy from '../assets/rainy_img.png'
import snowy from '../assets/snowy_img.png'
import moon from '../assets/moon_img.png'
import sunnyCloudy from '../assets/sunny_cloudy_img.png'
import rainChances from '../assets/rain_chances.png'


export default function BottomLeft({ data }) {

  const [isCelsius, setIsCelsius] = useState(true)
  const [currentIcon, setCurrentIcon] = useState(snowy)

  let celsius = Math.ceil(data.list[0].main.temp - 273.15)
  let fahrenheit = (celsius * 9 / 5) + 32

  const offset = data.city.timezone
  const getDay = () => {
    const d = new Date()
    const adjustedDate = new Date(d.getTime() + offset * 1000)
    const options = { weekday: 'long', timeZone: 'UTC' }
    const day = new Intl.DateTimeFormat('en-US', options).format(adjustedDate)
    return day
  }
  const getTime = () => {
    const d = new Date();
    const adjustedTime = new Date(d.getTime() + offset * 1000);
    const options = { hour: 'numeric', minute: 'numeric', timeZone: 'UTC' };
    const time = new Intl.DateTimeFormat('en-US', options).format(adjustedTime);
    return time;
  };

  
  useEffect(() => {
    let currentTime = new Date().getTime() / 1000;
    if (currentTime > data.city.sunrise && currentTime < data.city.sunset) {

      setCurrentIcon(sunny)
      if (data.list[0].weather[0].main == "Snow") {
        setCurrentIcon(snowy)
      }
      else if (data.list[0].weather[0].main == "Clouds") {
        setCurrentIcon(cloudy)
      }
      else if (data.list[0].weather[0].main == "Rain") {
        setCurrentIcon(rainy)
      }
      else if (data.list[0].weather[0].main == "Clear") {
        setCurrentIcon(sunny)
      }
      else {
        setCurrentIcon(sunnyCloudy)
      }
    }
    else {
      setCurrentIcon(moon)
    }
  }, [data])
  

  return (
    <>
      <div className='left-img-container'>
        <img src={currentIcon} alt="" />
      </div>
      <div className='left-current-temp'>
        {
          isCelsius ? (
            <h1>{celsius}<sup>°c</sup></h1>
          ) : (
            <h1>{fahrenheit}<sup>°f</sup></h1>
          )
        }
      </div>
      <div className="left-current-time">
        <p>{getDay()},</p><p>{getTime()}</p>
      </div>
      <div className='hr-line'></div>

      <div className="left-weather-statements">
        <div><img src={currentIcon} alt="" /><p>{data.list[0].weather[0].description}</p></div>
        <div><img src={rainChances} alt="" /><p>{Math.floor(data.list[0].pop * 100)}% chances of rain</p></div>
      </div>
      <div id='app-cover' >
        <div className="toggle-button-cover">
          <div className="button-cover">
            <div className="button r" id="button-9">
              <input type="checkbox" className="checkbox" onChange={() => isCelsius ? setIsCelsius(false) : setIsCelsius(true)}  />
              <div className="knobs">
                <span></span>
              </div>
              <div className="layer"></div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
