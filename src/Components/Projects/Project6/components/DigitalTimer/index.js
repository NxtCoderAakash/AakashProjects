import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    runningTimerInSeconds: 25 * 60,
    start: false,
    setTimer: 25,
    reset: true,
  }

  onClickStart = () => {
    const {runningTimerInSeconds, start} = this.state
    this.setState({reset: false})

    this.checkForTimer()

    if (runningTimerInSeconds > 0) {
      this.setState(prevState => ({start: !prevState.start}))
    } else if (runningTimerInSeconds === 0) {
      this.setState(prevState => ({
        runningTimerInSeconds: prevState.setTimer * 60,
      }))
      this.setState(prevState => ({start: !prevState.start}))
    }
  }

  tick = () => {
    this.setState(prevState => ({
      start: prevState.runningTimerInSeconds !== 0,
    }))
    this.setState(prevState => {
      if (prevState.runningTimerInSeconds > 0) {
        return {runningTimerInSeconds: prevState.runningTimerInSeconds - 1}
      }
      clearInterval(this.timerId)
      return null
    })
  }

  timerDisplay = () => {
    const {runningTimerInSeconds} = this.state
    const minutes = Math.floor(runningTimerInSeconds / 60)
    const seconds = runningTimerInSeconds % 60
    const formattedMinutes = '0'
      .concat(minutes)
      .slice(Math.min(-2, minutes.toString().length * -1))
    const formattedSeconds = '0'.concat(seconds).slice(-2)
    return `${formattedMinutes}:${formattedSeconds}`
  }

  checkForTimer = () => {
    const {start} = this.state
    if (start) {
      clearInterval(this.timerId)
    } else {
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  onIncreaseTime = () => {
    const {runningTimerInSeconds, start, reset} = this.state
    if (start === false && reset) {
      this.setState(prevState => ({
        runningTimerInSeconds: (prevState.setTimer + 1) * 60,
        setTimer: prevState.setTimer + 1,
      }))
    }
  }

  onDecreaseTime = () => {
    const {runningTimerInSeconds, start, reset} = this.state
    if (start === false && reset) {
      this.setState(prevState => ({
        runningTimerInSeconds: (prevState.setTimer - 1) * 60,
        setTimer: prevState.setTimer - 1,
      }))
    }
  }

  onClickReset = () => {
    this.setState(prevState => ({
      runningTimerInSeconds: prevState.setTimer * 60,
      start: false,
      reset: true,
    }))
    clearInterval(this.timerId)
  }

  render() {
    const {
      timerLimitInSeconds,
      runningTimerInSeconds,
      start,
      setTimer,
    } = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Digital Timer</h1>
          <div className="details-card">
            <div className="timer-image">
              <div className="timer-running">
                <h1 className="timer timer-text">{this.timerDisplay()}</h1>
                <p className="timer">{start ? 'Running' : 'Paused'}</p>
              </div>
            </div>
            <div>
              <div className="button-container">
                <button className="play-button" onClick={this.onClickStart}>
                  <img
                    className="play-image"
                    alt={start ? 'pause icon' : 'play icon'}
                    src={
                      start
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
                    }
                  />
                  <p>{start ? 'Pause' : 'Start'}</p>
                </button>

                <button onClick={this.onClickReset} className="play-button">
                  <img
                    className="play-image"
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png "
                    alt="reset icon"
                  />
                  <p>Reset</p>
                </button>
              </div>
              <br />
              <p className="set-timer-limit">Set Timer limit</p>
              <div className="increase-decrease-timer-container">
                <button onClick={this.onDecreaseTime} className="play-button">
                  -
                </button>
                <p className="set-timer-display">{setTimer}</p>
                <button onClick={this.onIncreaseTime} className="play-button">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
