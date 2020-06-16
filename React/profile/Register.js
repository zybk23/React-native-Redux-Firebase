import React, {Component} from 'react';
import {TextInput,Text,View,StyleSheet,Button} from 'react-native';
import {connect} from "react-redux"
import {userChange} from '../../Redux/actions/registerActions';
import {userCreate} from '../../Redux/actions/registerActions';
import Spinner from '../spinner/Spinner';
import FlashMessage from 'react-native-flash-message';


class Register extends Component {

    clickSave=()=>{
        const {name,surname,email,password,passwordConfig}=this.props.users;
        this.props.userCreate({name,surname,email,password,passwordConfig});
        this.props.navigation.goBack();

    };

    renderButton=()=>{
        const {loading}=this.props.users;

        if(!loading){
            return(
                <Button
                    style={styles.button}
                    title={"Kaydet"}
                    color={"#EA5100"}
                    onPress={this.clickSave}
                />
            )
        }
        return <Spinner size={"small"}/>
    };

    render() {

        const{name,surname,email,password,passwordConfig}=this.props.users;
        //console.log(passwordConfig);
        //console.log(password);
        return (
            <View>
                <View style={styles.container}>
                    <View style={styles.subContainer}>

                        <TextInput
                            placeholder={"İsim"}
                            value={name}
                            onChangeText={name=>this.props.userChange({props:"name",value:name})}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.subContainer}>

                        <TextInput
                            placeholder={"Soyisim"}
                            value={surname}
                            onChangeText={surname=>this.props.userChange({props:"surname",value:surname})}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.subContainer}>

                        <TextInput
                            placeholder={"E-mail"}
                            keyboardType={"email-address"}
                            value={email}
                            onChangeText={email=>this.props.userChange({props:"email",value:email})}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.subContainer}>

                        <TextInput
                            placeholder={"Şifre"}
                            value={password}
                            secureTextEntry
                            onChangeText={password=>this.props.userChange({props:"password",value:password})}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.subContainer}>

                        <TextInput
                            placeholder={"Şifre (tekrar)"}
                            value={passwordConfig}
                            secureTextEntry
                            onChangeText={passwordConfig=>this.props.userChange({props:"passwordConfig",value:passwordConfig})}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View>
                        {this.renderButton()}
                    </View>
                </View>
                <FlashMessage position="bottom" />
            </View>

        );
    }
}

const styles=StyleSheet.create({
    container:{
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
    subContainer:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    inputStyle:{
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    button:{
        marginTop: 10
    }
});

function mapStateToProps(state) {
    return {
        users:state.userCreateReducer
    }
}



export default connect(mapStateToProps,{userChange,userCreate})(Register) ;
