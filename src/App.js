import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  //to hold the initial input time and countdown time
  const [time, setTime] = useState(5)
  const [countDown, setcountdown] = useState(time)
  const [isrunning, setIsRunning] = useState(false)

//use to handle countdown logic
useEffect(() => {
  let timer;
  if (isrunning && countDown > 0){
    timer = setInterval(() => {
      setcountdown((previousCountDown) => previousCountDown - 1)
    }, 1000)
  }
  else if (countDown === 0){
    setIsRunning(false)
  }
  //cleanup interval on component unmount or when countdown stops
  return () => clearInterval(timer)
  }, [isrunning, countDown])

 const startTimer =  () => {
  if (time > 0){
    setcountdown(time)
    setIsRunning(true)
  }
} 

const stopTimer = () => {
  setIsRunning(false)
}

const resetTime = () => {
  setIsRunning(false)
  setcountdown(5)
}
  return (
    <div className='App'>
      <div class='container'>
        <h1>Hello!</h1>
        <div>
          <input type='number' value={time} onChange={(e) => setTime(Number(e.target.value))} disabled={isrunning}/>
        </div>
        <h2>{countDown} seconds</h2>
        <button onClick={startTimer} disabled={isrunning}>Start</button>
        <button onClick={stopTimer} disabled={!isrunning}>Stop</button>
        <button onClick={resetTime}>Reset</button>
      </div>
    </div>
  );
}

export default App;
