import { useState } from "react"
import Button from "./Button"
import PhaseData from "./PhaseData"
import '../styles/button.css'

const PredictionYearly = ({ displayData, predictionType }) => {
    const phases = ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4']
    const [phaseType, setPhaseType] = useState('Phase 1')
    const [visibility, setVisiblty] = useState(true)

    const handlePhase = (phase) => {
        setPhaseType(phase)
        setVisiblty(true)
    }

    return (
        <>
            <div style={{ padding: '10px 10px', margin: '4px 4px' }}>
                {phases.map(phase => <Button active={phaseType === phase} key={phase} buttonText={phase} handleButton={() => handlePhase(phase, displayData)} type={phaseType} />)}
            </div>
           {visibility && <PhaseData colors = {displayData['colors']} viewData = {displayData[phaseType.replace(' ','_').toLowerCase()]} type={predictionType} />}
        </>
    )
}

export default PredictionYearly