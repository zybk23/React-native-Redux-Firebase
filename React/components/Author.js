import React,{useEffect,useState} from 'react';
import {View,Text,FlatList,Image,StyleSheet,ScrollView,TextInput,Button,SafeAreaView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {getAuthor} from '../../Redux/actions/authorActions';
import {changeText} from '../../Redux/actions/authorActions';


const Author = (props) => {
    const authors=useSelector(state=>state.authorListReducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAuthor())
    },[]);
    //console.log(authors);
    const {filter}=useSelector(state=>state.filterListReducer);

    //console.log(filter)

    const filteredContacts=authors.filter(item=>{
        return item.name.toLowerCase().indexOf(
            filter.toLowerCase()
        )!==-1
    });

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.try}>
                <View style={styles.search}>
                    <TextInput style={styles.input}
                               value={filter}
                               onChangeText={filter=>dispatch(changeText(filter))}
                               placeholder={"ara"} />
                    <Button style={styles.button} title={"Yazar"} color={"#C8610C"}/>
                </View>
            </View>

            <View style={styles.general}>
                <Text style={styles.title}>En Çok Okunan Yazarlar</Text>
            </View>

            <FlatList
                data={filteredContacts}
                keyExtractor={key=>key.name}
                renderItem={itemData=>{
                    return (
                        <View style={styles.authors}>
                            <Image style={styles.image} source={{uri:itemData.item.image}}/>
                            <Text style={styles.text}>{itemData.item.name}</Text>
                        </View>
                    )
                }}
            />



        </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    authors:{
        flexDirection:"row",
        justifyContent:"flex-start",
        borderBottomColor:"#ddd",
        borderBottomWidth:1,
        marginLeft:3,
        marginBottom:5,
        marginTop:5,
        backgroundColor: "#DFDDC0"
    },
    image:{
        width:30,
        height:30
    },
    text:{
        fontSize:12,
        marginLeft: 10,
        marginTop: 4
    },
    title:{
        marginTop:10,
        marginLeft:25,
        marginBottom: 10,
        fontSize: 15,
        color:"#2E898A"

    },
    general:{
        backgroundColor: "#F0D9AC"
    },
    search:{
        flexDirection: "row",
        width: "100%",
        height: 50,
        backgroundColor:"#F0D9AC",
        borderBottomWidth: 4,
        borderBottomColor: "#fff"

    },
    button:{
        paddingBottom:15,
        marginBottom:10,

    },
    input:{
        backgroundColor:"#ddd",
        width:"75%",
        marginLeft:20,
        marginTop:3,
        marginBottom:3,
        marginRight:3
    }
});

export default Author;
