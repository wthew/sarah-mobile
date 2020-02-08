
export async function setupSocket ( ip, port ) {
  if (!ip) ip = '192.168.1.4' 
  if (!port) port = '54348'
  return { ip, port }
}
