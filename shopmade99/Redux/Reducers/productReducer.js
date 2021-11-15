import {TAMBAH_SUKSES} from '../Constans/ProductConstans'

const defaultState = {
    produk: []
}

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TAMBAH_SUKSES:
            return {
                produk: action.payload
            }
    
        default:
            return state;
    }
}