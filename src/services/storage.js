import { AsyncStorage } from 'react-native';

// Storage
function storage() {
  var data = {};

  async function init() {
    data = await JSON.parse(await AsyncStorage.getItem('data')) || {}
  }

  async function set(key, value) {
    data[key] = value
    await commit()
  }

  async function get(key) {
    return JSON.parse(await AsyncStorage.getItem('data'))[key]
  }

  async function commit() {
    await AsyncStorage.setItem('data', JSON.stringify(data))
  }

  async function set_ip(value) {
    await AsyncStorage.setItem('ip', value);
  }

  async function set_port(value) {
    await AsyncStorage.setItem('port', value);
  }

  async function get_ip() {
    console.log(await AsyncStorage.getItem('ip') || '192.168.1.1');
    
    return await AsyncStorage.getItem('ip') || '192.168.1.1';
  }

  async function get_port() {
    console.log(await AsyncStorage.getItem('port') || '1234');
    
    return await AsyncStorage.getItem('port') || '1234';
  }

  init()

  return {
    get_ip,
    get_port,
    set_ip,
    set_port,
    set,
    get,
    commit,
    data
  }
}


export default storage