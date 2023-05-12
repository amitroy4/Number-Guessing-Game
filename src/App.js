import { useState } from 'react';

function App() {
  let [p1, setP1] = useState("")
  let [p2, setP2] = useState("")
  let [text, setText] = useState("")
  let [errorText, setErrorText] = useState(false)
  let [errorNumber, setErrorNumber] = useState(false)
  let [pb, setPb] = useState(true)
  let [wp, setWp] = useState(true)
  let [wp1, setWp1] = useState(false)
  let [wp2, setWp2] = useState(false)
  let [counter, setCounter] = useState("1")

  let handleChange = (e) => {
    setText(e.target.value)
  }

  let handleClick = () => {
    if (text) {
      if (text - 25 || text == 25) {
        p1 = text
        let va = p1
        setP1(va)
        setErrorText(false)
        setErrorNumber(false)
        setPb(false)
        setText("")
        console.log(p1)
      } else {
        setErrorText(false)
        setErrorNumber(true)
      }
    } else {
      setErrorText(true)
      setErrorNumber(false)
    }
  }

  let handleClick2 = () => {
    if (text) {
      if (text - 25 || text == 25) {
        p2 = text
        let va = p2
        setP2(va)
        setErrorText(false)
        setErrorNumber(false)
        setPb(false)
        setText("")
        if (counter < 5) {
          if (p1 == p2) {
            setWp(false)
            setWp2(true)
          }
          let count = counter * 1
          count = count + 1;
          setCounter(count)
        } else {
          setWp(false)
          setWp1(true)
        }
      } else {
        setErrorText(false)
        setErrorNumber(true)
      }
    } else {
      setErrorText(true)
      setErrorNumber(false)
    }
  }


  return (
    <div>
      <h1>Number Guessing Game</h1>
      {
        wp ?
          <>
            {
              pb ?
                <h2>Player 1</h2>
                :
                <h2>Player 2</h2>
            }

            <div>
              {
                pb ?
                  ""
                  :
                  <div>
                    <h2>Applied Chance: {counter}</h2>
                  </div>
              }
              <input onChange={handleChange} value={text} />
              {
                pb
                  ?
                  <button onClick={handleClick}>Click</button>
                  :
                  <button onClick={handleClick2}>Click</button>
              }
            </div>
            {
              errorText && <h5>Empty Input</h5>
            }
            {
              errorNumber && <h5>Enter A Number</h5>
            }
          </>
          : <div>
            {
              wp1 && <h2>Player 1 Winner</h2>
            }
            {
              wp2 && <h2>Player 2 Winner</h2>
            }
          </div>

      }

    </div>
  );
}

export default App;
