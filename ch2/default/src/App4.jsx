import { useRef } from 'react'
import './App.css'
import Counter from './components/Counter';

function App() {
  const inputRef = useRef(null);
  
  return (
    <>
    <Counter /><br />

      <input ref={inputRef} /><br /><br />
      <button onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </>
  )
}

export default App