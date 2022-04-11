import {UserAction, UserState} from "../../types/user";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS";
export const FETCH_USERS_ERROR = "FETCH_USERS";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}
export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case  FETCH_USERS:
            return {loading: true, error: null, users: []}
        case  FETCH_USERS_SUCCESS:
            console.log("test")
            return {loading: false, error: null, users: action.payload}
        case  FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}