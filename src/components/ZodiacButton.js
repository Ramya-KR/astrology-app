import '../styles/button.css'

const ZodiacButton = ({ active, zodiac, handleClick, sign }) => {
    return (
        <button key={zodiac[0]} style={{ backgroundColor: active && sign === zodiac[1] ? '#007BFF' : 'white', border: 'transparent', borderRadius: '4px', boxShadow: '0 0 20px 0 lightgray', width: '75px', height: '75px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img className={active && sign === zodiac[1] ? 'imageColor' : 'image'} src={require(`../zodiacSigns/${zodiac[0].toLowerCase()}.png`)} alt={zodiac[0]} onClick={() => handleClick(zodiac[1])} />
            <span style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Poppins', fontSize: '10px' }}>{zodiac[0]}</span>
        </button>
    )
}

export default ZodiacButton