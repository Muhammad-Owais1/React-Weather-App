import React, { useState, useEffect } from 'react'
import './styles/style.css'

import searchIcon from './assets/search-icon.png'
import BottomLeft from './Components/BottomLeft'
import TodaySec from './Components/TodaySec'

import sunnyBg from './assets/sunny_bg.jpg'
import WeekSec from './Components/WeekSec'

export default function App() {
  const API_KEY = '056c524235695f779327445beba09d36'

  const [cityName, setCityName] = useState('')
  const [data, setData] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async (cityName) => {
    try {
      const response = await fetch(
        `
          https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}
        `
      )

      const data = await response.json()
        console.log(data)
      if (!data.message) {
        setData(data);
        setLoading(false);
        setErrorMsg('');
        setCityName("");
      } else {
        setLoading(false);
        setErrorMsg('City Not Found');
        setCityName('')
      }
    }

    catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMsg('No Internet Connection')
    }
  }

  useEffect(() => {
    fetchData('karachi')
  }, [])


  return (
    <>
      {
        !loading ? (
          <>
          <img src={ sunnyBg } className='background' alt="" />
            <div className='left'>
              <div className='left-top'>
                <div className="search-bar">
                  <input className='' type="text" placeholder='Search for places' onChange={(e) => setCityName(e.target.value)} value={cityName} />
                  <button onClick={() => fetchData(cityName)}><img src={searchIcon}></img></button>
                </div>
                <div className='left-top-location' >
                  <h2>{data.city.name},</h2>
                  <h1>{data.city.country}</h1>
                </div>
              </div>
              <div className="left-bottom">
                <BottomLeft data={ data }/>
              </div>
            </div>
            <div className="right">
              <TodaySec data={ data }/>
              <WeekSec data={ data }/>
            </div>
            
          </>
        ) : (
          <h1>loading...</h1>
        )
      }

    </>
  )
}

