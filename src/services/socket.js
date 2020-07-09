export default (host, port) => {

  if (host == undefined) host = 'deepin'
  if (port == undefined) port = '12345'

  client = new WebSocket(`ws://${host}:${port}/`)

  const handle = callback => client.onmessage = pack => {
    callback(JSON.parse(pack.data))
  }
  const send = (text) => client.send(text)

  return {
    handle,
    send
  }

}