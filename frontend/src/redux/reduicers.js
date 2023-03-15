const initialProps = {
    data: "www.dinyad.fr",
    height: 300, 
    width: 300,
    backgroundOptions :{
            color : "#ffffff"
    },
    dotsOptions : {
        color : "#000000"
    }
}
const qrProps = (state = initialProps, action) => {
    switch (action.type) {
        case "UPDATE_QR":
            let newS = { ...state };
            Object.keys(action.payload).forEach(k => {
                newS[k] = action.payload[k]
            });
            return newS;
        default:
            return state;
    }
}

const context = (state = { showColorPicker: false, cpdColor: null, colorFor: null }, action) => {
    switch (action.type) {
        case "UPDATE_CONTEXT":
            var newS = { ...state };
            Object.keys(action.payload).forEach(k => {
                newS[k] = action.payload[k]
            });
            return newS;
        default:
            return state;
    }
}




const reduicers = { qrProps, context }

export default reduicers