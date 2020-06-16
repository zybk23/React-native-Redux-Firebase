import firebase from "firebase"
import "@firebase/auth"
import UUIDGenerator from 'react-native-uuid-generator';
import {showMessage} from 'react-native-flash-message';
import {Alert} from "react-native"

export const userChange=({props,value})=>{

    return (dispatch)=>{
        dispatch({
            type:"user_change",
            payload:{props,value}
        })
    }
};

export const userCreate=({name,surname,email,password,passwordConfig})=>{
    return (dispatch)=>{
        if(name==="" || surname==="" || email==="" || password==="" || passwordConfig===""){
            Alert.alert(
                "message",
                "Boş Alanları Doldurunuz",
                [
                    {text:"Tamam",onPress:()=>null}
                ]
            )
        }

        else{
            dispatch({
                type:"create_user"
            });
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>console.log(user));
            firebase.database().ref("users")
                .push({name,surname,email,password,passwordConfig})
                .then(()=>{
                    dispatch({
                        type:"create_user_success"
                    });
                    showMessage({
                        message: "Kayıt Başarılı",
                        type: "success",
                    });
                });
        }



    }




};
