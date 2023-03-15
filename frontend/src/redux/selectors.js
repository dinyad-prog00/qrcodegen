import store from "./store"

export const getColor = (colorFor) => {
    if(!colorFor){
        colorFor="bg"
    }
    if (colorFor == "bg") {
        return (store) => store.qrProps.backgroundOptions.color
    }
    else if (colorFor == "dots") {
        return (store) => store.qrProps.dotsOptions.color
    }
}
