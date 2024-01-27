import '../styles/button.css'

const Button = ({ active, buttonText, handleButton, type }) => {
    return (
        <button className={active && buttonText === type ? 'predictionClick' : 'predictionType'} onClick={() => handleButton(buttonText)} >
            {buttonText}
        </button>
    )
}
export default Button