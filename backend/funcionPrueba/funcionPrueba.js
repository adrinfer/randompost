const fetch = require('node-fetch')

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
}

const handler = async function () {
  try {
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' }
    })
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data.joke })
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: error.message })
    }
  }
}

module.exports = { handler }
