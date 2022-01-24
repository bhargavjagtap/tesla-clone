import './ButtonSecondary.css'

function ButtonSecondary({name, type, onClick}) {
    return (
        <div className="buttonSecondary" onClick={onClick} type={type}>
            {name}
        </div>
    )
}

export default ButtonSecondary
