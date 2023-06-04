import { useState, useEffect } from 'react'
import Gallery from './Components/Gallery'

function App() {
  const [data, setData] = useState([])
  const [apiUrl, setApiUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextUrl, setNextUrl] = useState('')
  const [previousUrl, setPreviousUrl] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiUrl)
      const data = await response.json()

      setData(data.results)
      setNextUrl(data.next)
      setPreviousUrl(data.previous)
    }

    fetchData()
  }, [apiUrl])

  const fetchPreviousPage = () => {
    if (!previousUrl) return
    setApiUrl(previousUrl)
  }

  const fetchNextPage = () => {
    if (!nextUrl) return
    setApiUrl(nextUrl)
  }

  return (
    <div>
      <h1>Pokemon!</h1>
      <div style={{'display': 'inline-block'}} >
        <button onClick={fetchPreviousPage}>Previous</button>
        <button onClick={fetchNextPage}>Next</button>
      </div>
      <Gallery data={data} />
    </div>
  );
}

export default App;

// Pokemon
// previous / next buttons
// gallery ->