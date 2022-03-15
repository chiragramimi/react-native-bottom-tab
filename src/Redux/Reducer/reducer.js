const initialState = {
    currentScreen: 'HomeScreen',
    clickedIndex: 0,
    drawerEnable:false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "CLICK_DRAWER":
            return {
                ...state,
                currentScreen: action.payload,
            }
            case "CLICK_INDEX":
                return {
                    ...state,
                    clickedIndex: action.payload,
                }
                case "DRAWER_ENABLE":
                    return {
                        ...state,
                        drawerEnable: action.payload,
                    }
        default: 
            return state
    }
}

export default reducer