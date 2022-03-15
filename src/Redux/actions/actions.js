const drawerEnable = (payload) => {
    return {
        type: "DRAWER_ENABLE",
        payload:payload
    }
}
const clickIndex = (payload) => {
    return {
        type: "CLICK_INDEX",
        payload:payload
    }
}
const clickDrawer = (payload) => {
    return {
        type: "CLICK_DRAWER",
        payload:payload
    }
}

export default {
    clickDrawer,
    clickIndex,
    drawerEnable
}