import { useEffect, useState } from 'react'

export default function MainPAge () {
  const [joke, setJoke] = useState()

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  function añadirA () {
    console.log('AÑADIENDO AAAAA')
    fetch('/.netlify/functions/MongoClient2', {
      headers: { Accept: 'application/json' }
    })
  }

  function añadirP () {
    console.log('AÑADIENDO PPP')
    fetch('/.netlify/functions/MongoClient', {
      headers: { Accept: 'application/json' }
    })
  }

  return (
    <div id='error-page'>
      <h1>Oopsadffffffffffffffffffs!</h1>
      <p>Sorry, an unexpected error has occasdddddddddddddurred.</p>
      <p>
        aaaaaaaaaaaaaaaaaabbbbzzzzzzzz {joke}
        <button onClick={añadirP}>AÑADIR PPPP</button>
        <button onClick={añadirA}>AÑADIR AAAAAA</button>

      </p>

      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-format='fluid'
        data-ad-layout-key='-ef+6k-30-ac+ty'
        data-ad-client='ca-pub-4080251351488933'
        data-ad-slot='5952002930'></ins>
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-format='fluid'
        data-ad-layout-key='-ef+6k-30-ac+ty'
        data-ad-client='ca-pub-4080251351488933'
        data-ad-slot='5952002930'></ins>
    </div>
  )
}
