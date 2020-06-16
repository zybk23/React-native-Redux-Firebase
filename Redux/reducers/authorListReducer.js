







export  default function authorListReducer(state=[],action) {
    switch (action.type) {
        case "get_author":
            return action.payload;

        default:
            return state
    }
}
