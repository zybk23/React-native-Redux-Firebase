


export default function bookListReducer(state=[],action) {
    switch (action.type) {
        case "add_book":
            return action.payload;

        default:
            return state
    }
}
