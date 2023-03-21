import React, { useState } from 'react'
import { useTimer } from 'react-timer-hook'

const Clock = () => {
  const [session, setSession] = useState(25)
  const [clockStatus, setClockStatus] = useState(false)

  const time = new Date()
  time.setSeconds(time.getSeconds() + 60 * session)

  const { minutes, seconds, pause, restart, start, resume } = useTimer({
    expiryTimestamp: time,
    autoStart: clockStatus,
  })

  const handleRestart = () => {
    const timer = new Date()
    timer.setSeconds(timer.getSeconds() + 60 * session)
    restart(timer)
  }
  const handlePlus = () => {
    setClockStatus(false)
    setSession((prev) => prev + 1)
    const timer = new Date()
    timer.setSeconds(timer.getSeconds() + 60 * session)
    restart(timer)
  }

  const handleMinus = () => {
    setClockStatus(false)
    setSession((prev) => prev - 1)
    const timer = new Date()
    timer.setSeconds(timer.getSeconds() + 60 * session)
    restart(timer)
  }

  return (
    <div className="clockMain">
      <div className="title">25 + 5 Clock</div>
      <div className="session">
        <div className="session-title">
          Session Length
          <button className="button" onClick={handlePlus}>
            +
          </button>
          <span className="updated-session">{session}</span>
          <button className="button" onClick={handleMinus}>
            -
          </button>
        </div>
      </div>
      <div style={{ fontSize: '100px' }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={handleRestart}>Restart</button>
      </div>

      <div className="actions"></div>
    </div>
  )
}

export default Clock
