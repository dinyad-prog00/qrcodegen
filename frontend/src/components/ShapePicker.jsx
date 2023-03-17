import { useDispatch, useSelector } from "react-redux"

const shapes = ['square','rounded', 'dots', 'classy', 'classy-rounded', 'extra-rounded']
const ShapePicker = () => {
    const dispatch = useDispatch()
    const csh = useSelector((store)=>store.qrProps.dotsOptions.type)
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-start">
            {shapes.map((sh) => <div className={sh===csh?"bg-info m-2":"bg-light m-2"} style={{cursor:"pointer"}}> <img src={`/qrshapes/${sh}.svg`} className="p-1 border" width="130px" height="130px" onClick={() => dispatch({ type: "UPDATE_QR", payload: { "dotsOptions.type": sh } })} /> </div>)}
        </div>
    )
}

export default ShapePicker