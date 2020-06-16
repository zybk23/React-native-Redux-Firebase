

const initialState={
    email:"",
    password:"",
    loading:false
};

export  default function loginReducer(state=initialState,action) {
    switch (action.type) {
        case "email_changes":
            return {...state,email:action.payload};

        case "password_changes":
            return {...state,password: action.payload};

        case "login_user":
            return {...state,loading: true};

        case "login_user_success":
            return initialState;

        case "login_user_fail":
            return initialState;
        default:
            return state
    }
}
