import React from 'react'
import CounterDisplay from '../counterDisplay'

interface Props {
    
}

export const strings = {
    title: 'Current count is'
}

export const CounterPresenter = (props: Props) => {
    return (
        <div>
            <CounterDisplay title={strings.title} />
        </div>
    )
}

export default CounterPresenter