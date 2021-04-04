import { createMuiTheme } from '@material-ui/core/styles'
import {blue, amber} from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
        background: {default: 'white'},
        primary: blue,
        secondary: amber 
    }
})