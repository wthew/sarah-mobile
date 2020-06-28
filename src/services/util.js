
export async function setupSocket ( ip, port ) {
  if (!ip) ip = '192.168.1.4' 
  if (!port) port = '54348'
  return { ip, port }
}

export const commands = [
  {"text":"baixe o filme/serie"},
  {"text":"baixe a musica"},
  {"text":"limpe as mensagens","script":true},
]
