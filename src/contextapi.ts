//initialState
export const initialState: {
    id: string;
    draweropen: boolean;
} = {
    id: "",
    draweropen: false
}


//actionTypes
const SET_ID : string = "SET_ID";
const SET_DRAWER : string = "SET_DRAWER";


//actions
export const settingID = (input: string) => {
    return {
        type: SET_ID,
        id: input
    }
}
export const settingDRAWER = () => {
    return {
        type: SET_DRAWER
    }
}


//reducer
export function reducer(state = initialState, action: any) {
    switch(action.type) {
        case SET_ID:
            return {
                ...state,
                id: action.id
            }

        case SET_DRAWER:
            return {
                ...state,
                draweropen: !state.draweropen
            }

        default:
            return state;
    }
}