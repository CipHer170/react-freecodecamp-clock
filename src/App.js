import { useState } from "react";
import "./App.css";

function App() {
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [sec, setSec] = useState(5);

  // count seconds
  function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;
      setSec(counter);

      if (counter <= 0) {
        clearInterval(interval);
        console.log("Ding!");
      }
    }, 1000);
  }
  // change break and session values
  const breakTimeOperation = (e) => {
    const operation = e.target.textContent;

    if (operation === "-") {
      setBreakTime(breakTime - 1);
    } else if (operation === "+") {
      setBreakTime(breakTime + 1);
    }
  };

  const sessionTimeOperation = (e) => {
    const operation = e.target.textContent;
    if (operation === "-") {
      setSessionTime(sessionTime - 1);
    } else if (operation === "+") {
      setSessionTime(sessionTime + 1);
    }
  };

  // reset button
  const reset = () => {
    setBreakTime(5);
    setSessionTime(25);
    setSec(0);
    clearInterval(startCountdown);
  };

  return (
    <div className="App">
      <h1>25+5 Clock</h1>

      <div className="length">
        <div
          className="break_length"
          id="break-label"
          onClick={(e) => breakTimeOperation(e)}
        >
          <button className="btn" id="break-decrement">
            -
          </button>
          <h2 id="break-length">{breakTime}</h2>{" "}
          <button
            className="btn"
            id="break-increment"
            onClick={(e) => breakTimeOperation(e)}
          >
            +
          </button>
        </div>
        <div className="break_length" id="session-label">
          <button
            className="btn"
            id="session-decrement"
            onClick={(e) => {
              sessionTimeOperation(e);
            }}
          >
            -
          </button>
          <h2 id="session-length">{sessionTime}</h2>
          <button
            className="btn"
            id="session-increment"
            onClick={(e) => {
              sessionTimeOperation(e);
            }}
          >
            +
          </button>
        </div>
      </div>

      <div id="time-left">
        <div className="timer" id="timer-label">
          <h3 id="time-left">
            {sessionTime}:{sec}
          </h3>
          <div className="timer__btns">
            <button
              className="timer__btn"
              id="start_stop"
              onClick={() => startCountdown(sec)}
            >
              start_stop
            </button>
            <button className="timer__btn" id="reset" onClick={reset}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
