const { OpenAI } = require('openai')
require('dotenv').config()

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
})

const { OpenAIApi } = require('openai');

module.exports = openai