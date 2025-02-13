/* eslint-disable no-undef */
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import { MongoClient } from 'mongodb'

dotenv.config()

const app = express()
const PORT = process.env.PORT
const atlasURI = process.env.ATLAS_URI

app.use(express.json())
app.use(cors())

app.get('/api/recipes', async (_, res) => {
  const client = new MongoClient(atlasURI)
  try {
    await client.connect()
    const db = client.db('recipes')
    const dinners = db.collection('dinner')
    const recipesCursor = await dinners.find({})
    let recipes = []
    for await (const recipe of recipesCursor) {
      recipes.push(recipe)
    }
    res.json(recipes)
  } catch (err) {
    console.error('Error fetching documents:', err)
    res.status(500).json({ error: 'Failed to fetch documents' })
  } finally {
    await client.close()
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
