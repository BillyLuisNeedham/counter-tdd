import { useState } from 'react'
import { createStore } from 'redux'
import rootReducer from './root/reducer'

export const useStore = (stateOverrides = {}) => {
    const getInitialStore = (initialState) => createStore(rootReducer, initialState)

    const initialState = {
        ...stateOverrides
    }

    const [store] = useState(getInitialStore(initialState))

    return store
}