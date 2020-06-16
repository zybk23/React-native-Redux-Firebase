


const initialState={
    name:"",
    surname:"",
    email:"",
    password:"",
    passwordConfig:"",
    loading:false
};

export default function userCreateReducer(state=initialState,action) {
    switch (action.type) {
        case "user_change":
            return {...state,[action.payload.props]:action.payload.value};

        case "create_user" :
            return {...state,loading: true};

        case "create_user_success" :
            return initialState;

        default:
            return state
    }
}
