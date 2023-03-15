export const setter = (obje, key, value) => {
    const obj ={...obje}
    const keys = key.split('.');
    if (keys.length == 1) {
        obj[key] = value
    } else {
        obj[keys[0]] = setter(obj[keys[0]], key.substring(keys[0].length + 1), value)
    }
    return obj
}
// Exemple of use
// const aa = { a: { c: { d:  "helo"  },j:7 } ,b:58}
// console.log(setter(aa,"a.c.d",100))