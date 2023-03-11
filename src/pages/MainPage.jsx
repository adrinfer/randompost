import { useEffect, useState } from 'react'

export default function MainPAge () {
  const [joke, setJoke] = useState()

  useEffect(() => {
    fetch('/.netlify/functions/funcionPrueba', {
      headers: { Accept: 'application/json' }
    }).then(response => {
      return response.json()
    }).then(json => {
      setJoke(json.msg)
      console.log(json)
    })
  }, [])

  return (
    <div id="error-page">
      <h1>Oopsadffffffffffffffffffs!</h1>
      <p>Sorry, an unexpected error has occasdddddddddddddurred.</p>
      <p>
        aaaaaaaaaaaaaaaaaabbbbzzzzzzzz {joke}
      </p>
    </div>
  )
}
