import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatsLine = ({text, value, isPercent}) => (<tr><td>{text}</td><td>{value}{isPercent ? '%' : '' }</td></tr>)

const Stats = (props) => {
    if (props && Object.values(props).find(p => p > 0)) {
        return (
            <div>
                <h1>statistics</h1>
            <table>
                <tbody>
                    <StatsLine text="good" value={props.good}/>
                    <StatsLine text="neutral" value={props.neutral}/>
                    <StatsLine text="bad" value={props.bad}/>
                    <StatsLine text="all" value={props.all}/>
                    <StatsLine text="average" value={props.average}/>
                    <StatsLine text="positive" value={props.positivePercent} isPercent />
                </tbody>
            </table>
            </div>
        )
    }

    return (
        <div>
            <h1>statistics</h1>
            <p>no feedback given</p>
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const average = all / 3
    const positivePercent = good /all * 100

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />
            <Stats good={good} bad={bad} neutral={neutral} all={all} average={average} positivePercent={positivePercent}/>
        </div>
    )
}

export default App
