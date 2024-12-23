import React, { useEffect, useState } from "react";
import './Weather.css'
import axios from 'axios'

const API_KEY= "1fZNzT4LmOVbKegRpXQNBQOfxlWgw6MY"
function Weather(){
    const[city,setCity]=useState('')
    const[weatherdata,setWeateherdata]=useState(null)
    const[error,setError]=useState(null)
    // useEffect(()=>{
    //     fetchWeatherByGeolocation();
    // },[])
    // const fetchWeatherByGeolocation=async()=>{
    //     try{
    //         navigator.geolocation.getCurrentPosition(async(position)=>{
    //             const {latitude,longitude}=position.coords;
    //             const response=await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${latitude},${longitude}&apikey=${API_KEY}`
    //     );
    //             console.log(response.data)
    //             setWeateherdata(response.data)
    //         });

    //     }
    //     catch (error){
    //         setError(true)
    //     }
    // };

    const handleLocation= async ()=>{
        try{ let response= await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location= ${city}&apikey=${API_KEY}`)
         console.log(response)
         setWeateherdata(response)
        
        }
         catch(error){
            setError('Failed to fetch data')
            
         }

    }
    return(
       <>
       <div className="container">
        <h1 className="title">Weather Status</h1>
        <div className="inputcontainer">
            <input type="text" placeholder="Enter City name" className="input"
            value={city} onChange={(e)=>setCity(
                e.target.value
            )}/>
            <button className="button" onClick={handleLocation}>Search</button>
        </div>
        {error&& <p>{error}</p>}
        {weatherdata&&(
            <div className="weatherContainer">
                <h2 className="subtitle">{weatherdata.data.location.name} </h2>
                <p className="temparature">Temparature:{weatherdata.data.data.values.temperature}<sup>o</sup>C</p>
                <p className="humidity">Humidity:{weatherdata.data.data.values.humidity}%</p>
                <p className="windspeed">Wind Speed:{weatherdata.data.data.values.windSpeed}mph</p>
            </div>
        )}


       </div>
       </>
    )
}
export default Weather
