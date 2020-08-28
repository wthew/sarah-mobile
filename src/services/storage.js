import AsyncStorage from '@react-native-community/async-storage';
import { EventEmitter } from 'events';

const storage = (function () {
  let data = {};
  const eventManager = new EventEmitter();

  const init = async () => {
    const _storageData = JSON.parse(await AsyncStorage.getItem('data'))
    if (_storageData === null) await AsyncStorage.setItem('data', '{}')
    data = _storageData
  }

  const set = async (key, value) => {
    data[key] = value
    await AsyncStorage.setItem('data', JSON.stringify(data))
    eventManager.emit(key);
    console.log(`${key} is now: ${value}`)
  }

  const get = async (key) => {
    return JSON.parse(await AsyncStorage.getItem('data'))[key]
  }

  const onChangeKey = (key, callback) => {
    eventManager.on(key, callback);
  }

  const releaseListener = (key, callback) => {
    eventManager.off(key, callback)
  }

  init()

  return {
    init,
    set,
    get,
    onChangeKey,
    releaseListener
  }
})()

export default storage
