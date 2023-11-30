import AsyncStorage from '@react-native-async-storage/async-storage';


let id: any;
let buddyid: any;

// To store an array
export const storeUser = async (key: number, array: any[]) => {
  try {
    id = key
    // Convert the array to a string manually
    const stringifiedArray = array.map(value => JSON.stringify(value)).join(',');

    // Convert the key to a string
    const stringKey = String(key);

    // Store the stringified array in AsyncStorage with the string key
    await AsyncStorage.setItem(stringKey, stringifiedArray);
  } catch (error) {
    console.error('Error saving array:', error);
  }
};

// To retrieve an array
const getUserinfo = async (key: string): Promise<any[] | null> => {
  try {
    const jsonString = await AsyncStorage.getItem(key);
    if (jsonString !== null) {
      const array = JSON.parse(jsonString);
      return array;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving array:', error);
    return null;
  }
};

export const getId = () => {
  return id;
}
export const getBuddyId = () => {
  return buddyid;
}
export const setBuddyId = (newbuddyid: any) => {
  buddyid = newbuddyid;
}
export const getUrl = () => {
  return 'http://192.168.0.167:8080';
}
