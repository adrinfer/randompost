
import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://adrinfer:zYrAeL6640423181962@randompost00.i0agwcr.mongodb.net/?retryWrites=true&w=majority'
const mongo = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')

export const mongoDB = mongo.connect()

export function closeDB () {
  mongo.close()
}
