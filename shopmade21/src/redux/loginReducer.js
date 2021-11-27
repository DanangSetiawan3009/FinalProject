const defaultState = {
    statusLogin: false,
    token: ""
}

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOGIN_SUKSES":
            return {
                statusLogin: true,
                token: action.payload
            }

        case "LOGOUT_SUKSES":
            return {
                statusLogin: false
            }
    
        default:
            return state;
    }
}

export default loginReducer