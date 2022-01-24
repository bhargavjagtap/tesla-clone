import './ButtonPrimary.css'

function ButtonPrimary({name, type, onClick}) {
    return (
        <div className="buttonPrimary" onClick={onClick} type={type}>
            {name}
        </div>
    )
}

export default ButtonPrimary
