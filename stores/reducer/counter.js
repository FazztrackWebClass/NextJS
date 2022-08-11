const initialState = {
    count: 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE": {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case "DECREASE": {
            return {
                ...state,
                count: state.count - action.data
            }
        }
        case "RESET": {
            return {
                ...state,
                count: 0
            }
        }
        default: {
            return state
        }
    }
}

export default counter