import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as _ from "underscore"
const useHistory = (capacity = 100, interval = 5) => {
    const qrProps = useSelector((store) => store.qrProps);
    const [index, setIndex] = useState(0)
    const [history, setHistory] = useState([qrProps])

    const dispatch = useDispatch()

    const [can,setCan]=useState(true)
    const [canRedo, setCanRedo] = useState(false)
    const [canUndo, setCanUndo] = useState(false)
    
    useEffect(() => {

        if (_.isEqual(history[history.length - 1], qrProps) || !can) {
            console.log("no change")
        } else {
            if (history.length < capacity) {
                var cphistory = history;
                cphistory.push(qrProps)
                setHistory(cphistory)
            } else {
                var cphistory = history;
                cphistory.shift()
                cphistory.push(qrProps)
                setHistory(cphistory)
            }
            setIndex(history.length-1)
            console.log("change,len", history.length)
        }

    }, [qrProps])




    useEffect(() => {
        if (0 <= index && index < history.length) {
            dispatch({ type: "HISTORY", payload: history[index] });
        }

        if (index > 0) {
            setCanUndo(true)
        } else {
            setCanUndo(false)
        }

        if (index < history.length - 1) {
            setCanRedo(true)
        } else {
            setCanRedo(false)
        }
        console.log(index)
    }, [index, history])


    const undo = () => {
        if (index > 0) {
            setCan(false)
            setIndex(index - 1)
            setTimeout(()=>setCan(true),1000)      
        }
    }
    const redo = () => {
        if (index < history.length - 1) {
            setCan(false)
            setIndex(index + 1)
            setTimeout(()=>setCan(true),1000) 
        }
    }

    return { undo, redo, canUndo, canRedo };
}

export default useHistory

