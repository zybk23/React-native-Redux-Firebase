


export default function imageListReducer(state=[],action) {
    switch (action.type) {
        case "get_image":
            return action.payload;

        default:
            return state
    }
}
