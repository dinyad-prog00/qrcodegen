import { setter } from "../utils/setter";
//string ('rounded' 'dots' 'classy' 'classy-rounded' 'square' 'extra-rounded')
//Numeric, Alphanumeric, Bytes, Kanji
const initialProps = {
    data: "www.dinyad.fr",
    height: 300,
    width: 300,
    qrOptions: {
        typeNumber: 0, //0-40
        // mode : "Numeric"
    },
    backgroundOptions: {
        color: "#ffffff"
    },
    dotsOptions: {
        color: "#000000",
        type: "square"
    },
    cornersSquareOptions: {
        //type:"extra-rounded"
    }
}
const qrProps = (state = initialProps, action) => {
    switch (action.type) {
        case "UPDATE_QR":
            var newS = { ...state };
            Object.keys(action.payload).forEach(k => {
                newS = setter(newS, k, action.payload[k])
                //newS[k] = action.payload[k]
            });
            return newS;
        case "HISTORY":
            return action.payload;
        default:
            return state;
    }
}

const context = (state = { showColorPicker: true, showBtColorPicker: false, showShapePicker: false, cpdColor: null, colorFor: "dots" }, action) => {
    switch (action.type) {
        case "UPDATE_CONTEXT":
            var newS = { ...state };
            Object.keys(action.payload).forEach(k => {
                newS = setter(newS, k, action.payload[k])
                //newS[k] = action.payload[k]
            });
            return newS;
        default:
            return state;
    }
}




const reduicers = { qrProps, context }

export default reduicers