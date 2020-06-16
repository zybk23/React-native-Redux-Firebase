

const initialState={
    filter:""
};





export  default function filterListReducer(state=initialState,action) {
    switch (action.type) {
        case "change_text" :
            return {...state,filter:action.payload};
        default:
            return state
    }
}
