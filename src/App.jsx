import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import films from "./assets/films"

function App() {

  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState(films);

  useEffect(() => {
    const newArray = films.filter((toSee) => toSee.title.includes(search));
    setFilteredArray(newArray);
  }, [search]);

  return (
    <>
      {/* INIZIO HEADER */}
      <header>
        <h1>FILM CONSIGLIATI</h1>
      </header>
      {/* FINE HEADER */}


      {/* INIZIO MAIN */}
      <main>

        <input
          type="search"
          className='form-control my-3'
          placeholder='Cerca film'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />


        {filteredArray.map((film, index) => (
          <ul key={index} className="list-group my-3">
            <li className="list-group-item">{film.title}</li>
          </ul>
        ))}
      </main>
      {/* FINE MAIN */}
    </>
  )
}

export default App
