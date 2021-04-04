import React from 'react'
import { Button } from '@material-ui/core'

interface Props {
    label: string
}

export const ButtonBase: React.FC<Props> = ({label}) => {
    return (
        <Button variant="contained">{label}</Button>
    )
}

export default ButtonBase