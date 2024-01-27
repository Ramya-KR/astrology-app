import '../styles/predictions.css'
const Scores = ({ score, val, color, type }) => {
    const KeysNotRequired = ['total_score', 'zodiac', 'lucky_number', 'lucky_color_code', 'lucky_color', 'bot_response']

    return (
        type === 'Daily' ? (
            <p className='container'>
                <span className='square' style={{ background: color }}>{score.score}% <br /> {val === 'total_score' ? 'Total' : val?.charAt(0)?.toUpperCase() + val?.slice(1)} </span>
                {score.split_response}
            </p>
        ) :
            (type === 'Weekly' && !KeysNotRequired.includes(val)
                ? <p style={{ fontFamily: 'Poppins' }}><strong>{val?.charAt(0)?.toUpperCase() + val?.slice(1)}</strong>: {score}%</p>
                : (type === 'Yearly' && !['score', 'prediction', 'period'].includes(val) ? (<p className='container'>
                    <span className='square' style={{ background: color }}>{score.score} <br /> {val?.charAt(0)?.toUpperCase() + val?.slice(1)} </span>
                    {score.prediction}
                </p>) : null)
            )


    )
}

export default Scores