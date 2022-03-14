const initialState = {
    currentScreen:'HomeScreen'
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CLICK_DRAWER":
            return {
                ...state,
                currentScreen: action.payload,
            }
        default: 
            return state
    }
}

export default reducer