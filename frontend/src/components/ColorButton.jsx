
const ColorButton = ({ color, onClick }) => {
    
    return (
        <div style={{
            width: '25px',
            height: '25px',
            borderRadius: '2px',
            background: color,
            cursor: "pointer",
            boxShadow : "1px 1px 1px gray"
        }} onClick={onClick} className="d-block">
            
        </div>
    )
}

export default ColorButton