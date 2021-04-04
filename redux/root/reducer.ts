import { combineReducers, Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import counterState from '../../features/counter/redux/reducer'
import * as actions from './actions'

const appReducer: Reducer = combineReducers({
    counterState
})

function rootReducer(state = {}, action: Action): Reducer {
    switch (action.type) {
        case HYDRATE:
            const nextState = {
                ...state,
                ...action.payload
            }
            case actions.CLEAR:
                return appReducer({}, action)
            default:
                return (appReducer(state, action))
    }
}

export default rootReducer