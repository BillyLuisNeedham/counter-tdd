import React from 'react'
import { Typography } from '@material-ui/core'

interface Props {
    title: string
}

export const CounterDisplay: React.FC<Props> = ({title}) => {
    return (
        <div>
            <Typography>{title}</Typography>
        </div>
    )
}

export default CounterDisplay