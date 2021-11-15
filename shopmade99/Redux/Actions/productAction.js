import AsyncStorage from '@react-native-async-storage/async-storage';
import {TAMBAH_SUKSES, TAMBAH_GAGAL} from '../Constans/ProductConstans'

export const addHandler = async (dataProduk, dispatch) => {
    try {
        const {name, jenisProduct, prize, stock} = dataProduk;
        const token = AsyncStorage.getItem("token")
        const resp = await fetch("http://localhost:8080/api/product", {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(name, jenisProduct, prize, stock),
            headers: {
                "Content-type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization": "Bearer " + token
            }
        })
        const produks = await resp.json()
        dispatch({ type: TAMBAH_SUKSES, payload: produks });
    } catch (e) {
        dispatch({ type: TAMBAH_GAGAL, payload: '~ERROR~' });
    }
};