export const getGradient = (obj) => {
    const gd = { type: obj.gradientType === "linear-gradient" ? "linear" : "radial" }
    gd.colorStops = obj.colors.map((c) => { return { color: c.value, offset: c.left / 100 } })
    return gd;
}

export const getGradientFromString = (color) => {
    const gd = { type: color.substring(0, 6) === "linear" ? "linear" : "radial" }
    color=color.replace(/ /g,"")
    //var deg = st.match(/(\d+)deg/g)
    var allm = [...color.matchAll(/(rgba\(\d+,\d+,\d+,\d+\))(\d+)%/gi), ...color.matchAll(/(rgb\(\d+,\d+,\d+\))(\d+)%/gi)]
    gd.colorStops = allm.map((c) => { return { color: c[1], offset: parseInt(c[2]) / 100 } })
    return gd
}

