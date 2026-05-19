import { useState } from 'react'
// import './App.css'

function App() {
  const [text, setText] = useState("");
  const maxCharacters = 10;
const handleChange = (e) => {
    setText(e.target.value)
}
  return (
    <>
    <div>
        <h2>let's count your characters</h2>
        <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        cols={50}
        rows={10}
        />
    </div>
        <div>
        <span>current input number: {text.length} -- Max Character Input: {maxCharacters}</span>
        </div>
    </>
  )
}

export default App
