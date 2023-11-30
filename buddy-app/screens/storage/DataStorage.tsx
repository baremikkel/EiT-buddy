import AsyncStorage from '@react-native-async-storage/async-storage';

let id: number;
let buddyid: number;
let name: string;
let mail: string;

// To store an array
export const storeUser = async (userId: number, userName: string, userMail: string) => {
  try {
    id = userId;
    name = userName;
    mail = userMail;
  } catch (error) {
    console.error('Error saving user data:', error);
  }
};

export const getId = () => {
  return id;
}
export const getName = () => {
  return name;
}
export const getMail = () => {
  return mail;
}
export const getBuddyId = () => {
  return buddyid;
}
export const setBuddyId = (newbuddyid: any) => {
  buddyid = newbuddyid;
}
export const getUrl = () => {
  return 'http://10.126.20.130:8080';
}
