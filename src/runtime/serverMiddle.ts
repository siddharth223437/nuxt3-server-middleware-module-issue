import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  console.log(event.req.url)
})
