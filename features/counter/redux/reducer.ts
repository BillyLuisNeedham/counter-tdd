const initialState: CounterState = {
    count: 0
}

export default (state: CounterState = initialState, action: Action) => {
    switch (action.type) {
        default:
            return state
    }
}