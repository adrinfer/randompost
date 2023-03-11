
/* import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://adrinfer:zYrAeL6640423181962@randompost00.i0agwcr.mongodb.net/?retryWrites=true&w=majority'
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
 */

import { mongoDB } from '../utils/MongoClient'

const handler = async (event) => {
  (await mongoDB).db('RandomPost').collection('PPPPP').insertOne({ probando: 'AAAAAA' })

  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'AAAAA' })
  }
}

module.exports = { handler }
