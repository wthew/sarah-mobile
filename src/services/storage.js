import { AsyncStorage } from 'react-native';

// Storage
export default () => {
  async function set(key, value) {
    await AsyncStorage.setItem(key, value);
  }

  async function get(key) {
    return await AsyncStorage.getItem(key);
  }

  return {
    set,
    get
  }
}