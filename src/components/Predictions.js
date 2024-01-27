import React, { useEffect, useState } from 'react'
import predictionService from '../services/predictions'
import '../styles/predictions.css'
import Scores from './Scores'
import PredictionYearly from './PredictionYearly'

const Predictions = ({ sign, predictionType }) => {
    const [color, setColor] = useState('#000')
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const formattedDay = day > 10 ? day : `0${day}`
    const formattedMonth = month > 10 ? month : `0${month}`
    const formattedDate = formattedDay + '/' + formattedMonth + '/' + year

    const [scores, setScores] = useState({})
    const [isloading, setIsLoading] = useState(true)
    const [displayData, setDisplayData] = useState({})
    const colors = { 'total_score': 'linear-gradient(137deg, #4923FF -22.03%, #A521FF 142.13%)', 'relationship': 'linear-gradient(137deg, #1A91FF -22.03%, #2FD38E 142.13%)', 'career': 'linear-gradient(137deg, #DDCF4F -22.03%, #D3562F 142.13%)', 'family': 'linear-gradient(137deg, #0FC398 -22.03%, #5AD32F 142.13%)', 'health': 'linear-gradient(137deg, #DD4F4F -22.03%, #D32FAF 142.13%)', 'finances': 'linear-gradient(137deg, #DDCF4F -22.03%, #D3562F 142.13%)', 'travel': 'linear-gradient(137deg, #1A91FF -22.03%, #2FD38E 142.13%)', 'friends': 'linear-gradient(137deg, #DD4F4F -22.03%, #D32FAF 142.13%)', 'status': 'linear-gradient(137deg, #0FC398 -22.03%, #5AD32F 142.13%)', 'physique': 'linear-gradient(137deg, #DDCF4F -22.03%, #D3562F 142.13%)', 'education': 'linear-gradient(137deg, #DD4F4F -22.03%, #D32FAF 142.13%)' }

    const fetchData = async () => {
        let DisplayData = {}
        if (predictionType === 'Daily') {
            DisplayData = await predictionService.getDailySun(sign, formattedDate)
        } else if (predictionType === 'Weekly') {
            DisplayData = await predictionService.getWeeklySun(sign)
        } else {
            DisplayData = await predictionService.getYearlySun(sign, year)
        }
        const colorValue = DisplayData ? DisplayData.lucky_color_code : '#bbb'
        const data = DisplayData && predictionType === 'Weekly' ? DisplayData : predictionType === 'Daily' ? { ...DisplayData.bot_response, colors: colors } : { ...DisplayData, colors: colors }
        setScores(data)
        setColor(colorValue)
        setDisplayData(DisplayData)
        setIsLoading(false)
    }


    useEffect(() => {
        setIsLoading(true)
        setScores({})
        if (sign > 0) {
            fetchData()
        }

    }, [sign, predictionType])


    return !isloading ? ['Daily', 'Weekly'].includes(predictionType) ? <div style={{ padding: '10px 10px', margin: '4px 4px' }}>
        Total {predictionType === 'Weekly' ? scores.total_score : null}<br />
        Lucky Color: {displayData.lucky_color} <span className='circle' style={{ backgroundColor: color, boxShadow: '0px 6px 12px lightgray' }}></span> <br />
        Lucky Number: {displayData.lucky_number.join(',')}
        <br />
        {predictionType === 'Weekly' ? (<div>
            <h3>Summary</h3>
            {scores.bot_response}
            <br />
            <h3>Scores</h3>
        </div>) : null}

        {Object.keys(scores).map((key) => (
            key !== 'colors' ? <Scores key={key} score={scores[key]} val={key} color={predictionType === 'Daily' ? scores.colors[key] : null} type={predictionType} /> : null)
        )}
    </div> : <PredictionYearly displayData={scores} predictionType={predictionType} /> : <div style={{ paddingTop: '27px' }}>Data is loading</div>

}

export default Predictions
