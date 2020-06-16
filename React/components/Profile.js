import React from 'react';
import {View, Text, Button} from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"


const Profile = (props) => {
    return (
        <View>
            <Text>My Profile</Text>
            <FontAwesome name={"list"} size={30} color={"#900"}/>
        </View>
    );
};

export default Profile;
