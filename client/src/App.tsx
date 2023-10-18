import socketIO from 'socket.io-client'

const socket = socketIO('http://localhost:4000')

function App() {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  )
}

export default App
