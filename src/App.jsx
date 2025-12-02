import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import films from "./assets/films"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* INIZIO HEADER */}
      <header>
        <h1>FILM CONSIGLIATI</h1>
      </header>
      {/* FINE HEADER */}





      {/* INIZIO MAIN */}
      <main>
        {films.map((film, index) => (
          <ul key={index} className="list-group">
            <li  className="list-group-item">{film.title}</li>
          </ul>
        ))}
      </main>
      {/* FINE MAIN */}
    </>
  )
}

export default App
