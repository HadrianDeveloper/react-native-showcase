import * as SecureStore from 'expo-secure-store';
import { useContext } from 'react';

export async function login(un, pw, setUserToken) {
    let res = await SecureStore.getItemAsync(un);
    if (res === pw) {
        setUserToken(un);
    } else {
        alert('Those login details are not correct.')
    };
};

export async function createAccount(un, pw) {
    await SecureStore.setItemAsync(un, pw);
};

export async function isUsernameUnique(un, pw, setUserToken) {
    let res = await SecureStore.getItemAsync(un);
    if (res) {
        alert('Username already exists!');
    } else {
        createAccount(un, pw);
        setUserToken(un);
    };
};

