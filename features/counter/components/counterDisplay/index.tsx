import React from 'react'
import { Typography } from '@material-ui/core'

interface Props {
    title: string
    count: number
}

export const CounterDisplay: React.FC<Props> = ({title, count}) => {
    return (
        <div>
            <Typography>{title}</Typography>
            <Typography>{count}</Typography>
        </div>
    )
}

export default CounterDisplay