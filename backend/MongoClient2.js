
/* import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://adrinfer:zYrAeL6640423181962@randompost00.i0agwcr.mongodb.net/?retryWrites=true&w=majority'
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
 */

import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://adrinfer:zYrAeL6640423181962@randompost00.i0agwcr.mongodb.net/?retryWrites=true&w=majority'
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj')

export const mongoDB = mongo.connect()
// import { mongoDB } from '../utils/MongoClient'

const handler = async (event) => {
  //(await mongoDB).db('RandomPost').collection('AAAAAA').insertOne({ probando: 'BBBBBB' })
  console.log('SAD')
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: 'AAAAA' })
  }
}

module.exports = { handler }
