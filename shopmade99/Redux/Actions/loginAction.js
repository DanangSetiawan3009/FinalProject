import { LOGIN_SUKSES, LOGIN_ERROR, REGIS_SUKSES, REGIS_ERROR } from '../Constans/LoginConstans';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginHandler = async (data, dispatch) => {
    try {
        const { username, password } = data;
        const resp = await fetch("localhost:8080/api/login", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(username, password),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        const datas = await resp.json()
        AsyncStorage.setItem("token", datas)
        dispatch({ type: LOGIN_SUKSES, payload: datas });
    } catch (e) {
        dispatch({ type: LOGIN_ERROR, payload: '~ERROR~' });
    }
};

export const regisHandler = async (data, dispatch) => {
    try {
        const { username, password } = data;
        const resp = await fetch("localhost:8080/api/registrasi", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(username, password),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
        const datas = await resp.json()
        console.log("Regis:", datas)
        Alert.alert("Sukses registrasi", "Silahkan login untuk mulai berbelanja")
        dispatch({ type: REGIS_SUKSES, payload: data });
    } catch (e) {
        dispatch({ type: REGIS_ERROR, payload: '~ERROR~' });
    }
};