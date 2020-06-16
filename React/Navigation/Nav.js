import React from "react"
import {View,Text,StyleSheet} from "react-native"
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from 'react-navigation';
import  {createDrawerNavigator} from 'react-navigation-drawer';
import Home from '../components/Home';
import Profile from '../components/Profile';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Categories from '../components/Categories';
import Books from '../components/Books';
import CartScreen from '../shop/CartScreen';
import Login from '../profile/Login';
import Register from '../profile/Register';
import Slider from '../profile/Slider';
import Author from '../components/Author';
import OrderScreen from '../shop/OrderScreen';


const defaultNavOptions={
    headerStyle:{
        backgroundColor:"#C1C1C1"
    },
    headerTintColor:"#4D0000",
    headerTitleStyle:{
        fontSize:22,
        fontFamily:"sans-serif"
    },
};


const productsNavigator=createStackNavigator({
    home:Home,
    profile:Profile,
    categories:Categories,
    books:Books,
    cartScreen:CartScreen,
    login:Login,
    register:Register,
    deneme:Slider,
    author:Author,
},{
    defaultNavigationOptions:defaultNavOptions
});


const OrderNavigator=createStackNavigator({
    order:OrderScreen
},{
    defaultNavigationOptions:defaultNavOptions
});

const CartNavigator=createStackNavigator({
    cartScreen:CartScreen,
},{
    defaultNavigationOptions:defaultNavOptions
});

const styles=StyleSheet.create({
    view:{
        flexDirection:"row",
        alignItems:"center"
    }
});

const ShopNavigator=createDrawerNavigator({
    Anasayfa:productsNavigator,
    Siparisler:OrderNavigator,
    Sepetim:CartNavigator
},{
    contentOptions:{
        activeTintColor:"#C2185B"
    }
});
export default createAppContainer(ShopNavigator);
