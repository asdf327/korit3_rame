
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [weather, setWeather] = useState({
    temp: '',
    desc: '',
    icon: ''
  })

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Busan&units=Metric&APIkey=24c9772f88cc9b215a0bc859087c18fd')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp,
        desc: result.weather[0].description,
        icon: result.weather[0].icon,
      });
    })
    .catch(err => console.log(err));
  }, []); // 최초 랜더링 시에만 api를 가져와서 조회한다는 의미 


  if (weather.icon) {
    return (
      <>
        <p>온도 : {weather.temp}</p>
        <p>설명 : {weather.desc}</p>
        <p>아이콘: {weather.icon}</p> 
        <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="날씨아이콘" 
        />
      </>
    )
  } else {
    return <h1>로딩 중 ...</h1>
  }
}

export default App
