import React,{useEffect,useState} from 'react';
import {View, Text, Button,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {getImage} from '../../Redux/actions/imageActions';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Slider from '../profile/Slider';


const Home = (props) => {
    useEffect(()=>{
         dispatch(getImage())
     },[]);
    const image=useSelector(state=>state.imageListReducer);
    const dispatch=useDispatch();

    //console.log(image);
    //console.log(props.navigation.navigate("categories"))
    return (
        <ScrollView>
            <View style={styles.image}>
                <Slider/>
            </View>

            <Text>Çok Satanlar</Text>
            <View style={styles.firstView}>
                 {
                     image.map((item,index)=>
                             <Image key={index} style={styles.sale} source={{uri:item.url}}/>
                         )
                 }

             </View>
            <View  style={styles.navBar}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("books")}}
                    style={styles.firstMenu}>
                    <FontAwesome  name={"star"} color={"#F66045"} size={20}/>
                    <Text style={styles.nav}>Kitaplar</Text>
                    <FontAwesome style={{justifyContent:"flex-end"}} name={"arrow-circle-o-down"} color={"#F66045"} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("author")}}
                    style={styles.firstMenu}>
                    <FontAwesome name={"certificate"} color={"#F66045"} size={20}/>
                    <Text style={styles.nav}>Yazarlar</Text>
                    <FontAwesome style={{justifyContent:"flex-end"}} name={"arrow-circle-o-down"} color={"#F66045"} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.navigation.navigate("order")}}
                    style={styles.firstMenu}>
                    <FontAwesome name={"book"} color={"#F66045"} size={20}/>
                    <Text style={styles.nav}>YayınEvleri</Text>
                    <FontAwesome style={{justifyContent:"flex-end"}} name={"arrow-circle-o-down"} color={"#F66045"} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstMenu} onPress={()=>{props.navigation.navigate("categories")}}>
                    <FontAwesome  name={"list"} color={"#F66045"} size={20}/>
                    <Text style={styles.nav}>Kategoriler</Text>
                    <FontAwesome style={{justifyContent:"flex-end"}} name={"arrow-circle-o-down"} color={"#F66045"} size={20}/>
                </TouchableOpacity>
                <View style={styles.firstMenu}>
                    <FontAwesome name={"gift"} color={"#F66045"} size={20}/>
                    <Text style={styles.nav}>Puan Kataloğu</Text>
                    <FontAwesome style={{justifyContent:"flex-end"}} name={"arrow-circle-o-down"} color={"#F66045"} size={20}/>
                </View>
             </View>

        </ScrollView>
    );
};

const styles=StyleSheet.create({
    navBar:{
        flexDirection:"column",
        justifyContent:"space-between",
        height:200,
        paddingHorizontal:20,
        backgroundColor:"#DCD7DB",

    },
    nav:{

    },
    image:{
        width:"100%",
        height:200,

    },
    sale:{
        width:"100%",
        height:"100%",
        marginLeft:10,


    },
    firstView:{
        width: "18%",
        height:80,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop:10,
        marginVertical:20,
    },
    firstMenu:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    }
});

Home.navigationOptions=data=>{
    return{
        headerTitle: "Taha'nın Kitap Evi",
        headerLeft:()=><FontAwesome
            style={{marginLeft:10}}
            name={"list"} size={20} color={"#F66045"}
            onPress={()=>{
                data.navigation.toggleDrawer()
            }
            }
        />,
        headerRight:()=>
            <View style={styles.view}>
                <Text style={{color:"#205442",opacity:0.4}}>Profile</Text>
                <FontAwesome
                    style={{marginRight:10,marginLeft: 10}}
                    name={"user"} size={20} color={"#F66045"}
                    onPress={()=>data.navigation.navigate("login")}
                />
            </View>
    }
};


export default Home ;

