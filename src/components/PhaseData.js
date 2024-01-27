import Scores from "./Scores"

const PhaseData = ({ viewData, type, colors }) => {
    return (
        <div style={{fontFamily:'Poppins', padding:'10px 10px', margin: '4px 4px'}}>
            <strong>Period</strong> : {viewData.period} <br />
            <strong>Total</strong> : {viewData.score} <br />
            <strong>Summary</strong>: 
            <div style={{padding:'10px 10px', marginTop:'2px', display:'inline-block'}}>
                {viewData.prediction}
            </div>
            {Object.keys(viewData).map((key) => (
                key !== 'colors' ? <Scores key={key} score={viewData[key]} val={key} color={colors[key]} type={type} /> : null)
            )}
        </div>
    )
}

export default PhaseData