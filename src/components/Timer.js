import React from "react"

export default function Timer({calculatedScoreAfterElapsedTime}) {
    const [countDown, setCountDown] = React.useState(60 * 7);
    const [runTimer, setRunTimer] = React.useState(true);
    const [isTimeUp, setIsTimeUp] = React.useState(false)
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    React.useEffect(() => {
      if (countDown === 0 && runTimer) {
        setRunTimer(false);
        setIsTimeUp(true)
        calculatedScoreAfterElapsedTime()
      }
    }, [countDown, runTimer, calculatedScoreAfterElapsedTime]);
  
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  
    return (
      <div className='timer'>
          <h2>
            {
              isTimeUp ? <span>Time's Up</span> : 
              <span>{minutes}:{seconds} </span>
            }
            </h2>
      </div>
    );
  }