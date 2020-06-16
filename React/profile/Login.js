import React from 'react';
import {View,TextInput,Button,StyleSheet,Text,TouchableOpacity} from "react-native"
import {useSelector,useDispatch} from 'react-redux';
import {emailChanged,passwordChanged} from '../../Redux/actions/loginActions';
import {loginUser} from '../../Redux/actions/loginActions';
import Spinner from '../spinner/Spinner';

const Login = (props) => {

    const dispatch=useDispatch();
    const users=useSelector(state=>state.loginReducer);
    const {email,password,loading}=users;

    //console.log(email);
    //console.log(password);

    const clickLogin=()=>{
        dispatch(loginUser({email,password}));
    };

    const renderButton=()=>{
        if(!loading){
            return(
                <Button
                    style={styles.button}
                    title={"Giriş"}
                    color={"#EA5100"}
                    onPress={clickLogin}
                />
            )
        }
        return <Spinner size={"small"}/>
    };
    return (
        <View>
            <View style={styles.login}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputStyle}
                        value={email}
                        keyboardType={"email-address"}
                        onChangeText={email=>dispatch(emailChanged(email))}
                        placeholder={"E-mail adresiniz"}
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.inputStyle}
                        value={password}
                        secureTextEntry
                        onChangeText={password=>dispatch(passwordChanged(password))}
                        placeholder={"Şifreniz"}
                    />
                </View>
                <View>
                    {renderButton()}
                </View>

            </View>
            <View style={styles.bottomContainer}>
                <Text  style={{marginTop:15,marginBottom:15}}>Şifremi Unuttum</Text>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("register")}} >
                      <Text>Üye Ol</Text>
                    </TouchableOpacity>
            </View>

        </View>

    );
};

const styles=StyleSheet.create({
    login:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    inputStyle:{
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    container:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

    },
    button:{
        marginTop: 10
    },
    bottomContainer:{
        alignItems:"center",
        color:"#ddd",
        opacity:0.5
    }
});


export default Login;
