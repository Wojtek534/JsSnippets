// zzReducer
function PageReducer(state = [], action) {
    switch (action.type) {
        case ACTION_NAME:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}