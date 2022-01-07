import { createServer } from 'http'

export default function ui() {
  const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('okay')
  })

  server.listen(8000, '0.0.0.0', () => {})

  return 'Ready on http://localhost:8000'
}
