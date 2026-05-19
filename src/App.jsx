import { useState, useEffect } from 'react'
// import './App.css'

function App() {
  const [text, setText] = useState("");
  const maxCharacters = 100;
    const handleChange = (event) => {
        if(maxCharacters > text.length){
        setText(event.target.value)
        }
    }
    const count = maxCharacters - text.length;
    useEffect(() => {
        document.title = count;
    },[text]);

  return (
    <>
        <div>
            <h2>let's count your characters</h2>
            <textarea
            value={text}
            onChange={handleChange}
            cols={50}
            rows={10}
            />
        </div>
        <div>
        <span style={{color: count < 25 ? 'red' : count < 50 ? 'yellow' : 'green'}}>current input number: {text.length} -- Max Character Input: {maxCharacters}</span>
        </div>
 </>
  )
}

export default App
