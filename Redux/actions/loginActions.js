import firebase from 'firebase';
import "@firebase/auth"
import {Alert} from "react-native"
import {showMessage} from 'react-native-flash-message';
import { NavigationActions} from 'react-navigation';


export const emailChanged=(email)=>{
    return{type:"email_changes",payload:email}
};

export const passwordChanged=(password)=>{

    return {type:"password_changes",payload:password}
};


export const loginUser=({email,password})=>{
    return (dispatch)=>{
        //console.log(NavigationActions);
        //dispatch(NavigationActions.navigate({routeName:"home"}));
        //console.log("taha")
        if(email==="" || password===""){
            Alert.alert(
                "Mesaj",
                "Boş alanları doldurunuz",
                [
                    {text:"Tamam",onPress:()=>null}
                ]


            )
        }
        else{
            dispatch({
                type:"login_user"
            });

            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(user=>
                        loginSuccess(dispatch,user)
                    )
                .catch(()=>loginFail(dispatch))
        }

    }
};

const loginSuccess=(dispatch,user)=>{
    dispatch({
        type:"login_user_success",
        payload:user
    });
    console.log("girildi");
    dispatch(NavigationActions.navigate({
        routeName:"home",
        params:{},
        action:NavigationActions.navigate({routeName:"home"})
    }));

};

const loginFail=(dispatch)=>{
    Alert.alert(
        "Mesaj",
        "Kullanıcı Adı veya şifre hatalı",
        [
            {text:"Tamam",onPress:()=>null}
        ]
    );
    dispatch({
        type:"login_user_fail",
    })
};
