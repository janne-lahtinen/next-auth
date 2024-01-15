import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const mongoLoginName = process.env.MONGO_LOGIN_NAME
  const mongoPassWord = process.env.MONGO_PASSWORD
  const urlEnd = process.env.MONGO_URL_END

  const client = await MongoClient.connect(
    `mongodb+srv://${mongoLoginName}:${mongoPassWord}@cluster${urlEnd}`
  )
  return client
}