export default (ip, port) => {
  client = new WebSocket(`ws://${ip}:${port}/`)

  const handle = (f) => client.onmessage = pack => {
    f(JSON.parse(pack.data))
  }
  const send = (text) => client.send(text)

  return {
    handle,
    send
  }

}