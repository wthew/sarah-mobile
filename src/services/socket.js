import Storage from "../services/storage";

const makeClient = async () => {
  const host = await Storage.get('host')
  const port = await Storage.get('port')

  if ( host == undefined ) host = 'deepin'
  
  if ( port == undefined ) port = '12345'

  let client = new WebSocket(`ws://${host}:${port}/`)

  return {
    handle: callback => client.onmessage = pack => callback( JSON.parse(pack.data) ),
    send: text => client.send(text)
  }
}

export default makeClient
