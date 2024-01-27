import { useState } from 'react';
import Predictions from './components/Predictions';
import ZodiacButton from './components/ZodiacButton';
import Button from './components/Button';

const App = () => {
  const [predictionType, setPredictionType] = useState('Daily')
  const [sign, setSign] = useState(1)
  const [isActive, setIsActive] = useState(true)

  console.log(isActive)

  const handleClick = (value) => {
    setSign(value)
    setIsActive(true)
  }

  const handlePrediction = (buttonText) => {
    setSign(0)
    setPredictionType(buttonText)
  }

  const zodiacs = [['Aries', 1], ['Taurus', 2], ['Gemini', 3], ['Cancer', 4], ['Leo', 5], ['Virgo', 6], ['Libra', 7], ['Scorpio', 8], ['Sagittarius', 9], ['Capricorn', 10], ['Aquarius', 11], ['Pisces', 12]]
  return (
    <div>
      <h2 style={{ fontFamily: 'Poppins' }}>Predictions</h2>
      <div style={{ paddingBottom: '27px', marginLeft: '16px', display: 'flex', width: '480px', alignItems: 'flex-start' }}>

        <Button active={predictionType === 'Daily'} handleButton={handlePrediction} buttonText='Daily' type={predictionType} />
        <Button active={predictionType === 'Weekly'} handleButton={handlePrediction} buttonText='Weekly' type={predictionType} />
        <Button active={predictionType === 'Yearly'} handleButton={handlePrediction} buttonText='Yearly' type={predictionType} />

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginLeft: '16px' }}>
        {zodiacs.map(zodiac => (
          <ZodiacButton active={isActive} key={zodiac[0]} zodiac={zodiac} handleClick={handleClick} sign={sign} />
        ))}
      </div>
      <div>
         {sign  ? <Predictions sign={sign} predictionType={predictionType} />:null}
      </div>
    </div>
  );
}

export default App;
