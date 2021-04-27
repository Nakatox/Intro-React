import React from 'react'

const Money = (props) => {
    const { money } = props
    return (
        <div className="money">
            <ul>
                <li>{money.name}</li>
            </ul>
        </div>
    )
}

export default Money
