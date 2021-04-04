import React from 'react'
import { Button } from '@material-ui/core'

interface Props {
    label: string
    onClick: () => any
}

export const ButtonBase: React.FC<Props> = ({label, onClick}) => {
    return (
        <Button onClick={onClick} variant="contained">{label}</Button>
    )
}

export default ButtonBase