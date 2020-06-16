import React,{useEffect} from 'react';
import {View,Text,ScrollView,Image,StyleSheet,Button} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {getBook} from '../../Redux/actions/bookActions';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {addToCart} from '../../Redux/actions/cartActions';
import FlashMessage from 'react-native-flash-message';
import {showMessage,hideMessage} from 'react-native-flash-message';


const Books = () => {

    const books=useSelector(state=>state.bookListReducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getBook())
    },[]);

    //console.log(book);

    return (
        <ScrollView>
            {
                books.map((book,id)=>{
                    return(

                            <View style={styles.card} key={id}>
                                <View style={styles.cardTitle}>
                                    <Text style={{color:"#699FA0"}}>{book.name}</Text>
                                    <FontAwesome onPress={()=>{
                                        showMessage({
                                            message: "Ürün Sepete Eklendi",
                                            type: "success",
                                        });
                                        dispatch(addToCart({product:book,quantity:1}))
                                    }}
                                        name={"shopping-cart"} size={23} color={"#1DBF00"}/>
                                </View>
                                <Image style={styles.image} source={{uri:book.image}}/>
                                <View style={styles.cardBottom}>
                                    <View style={styles.stok}>
                                        <Text>Stokta Kalan Ürün</Text>
                                        <Text>{book.unitInStock}</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:"#FF0000" , right:"18%" ,top:"35%"}}>
                                            {book.price}TL
                                        </Text>

                                    </View>
                                </View>

                                <FlashMessage position="bottom" />
                            </View>


                    )
                })
            }

        </ScrollView>
    );
};

const styles=StyleSheet.create({
    card:{
        shadowOpacity:0.6,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        height: 180,
        margin:20,
        width: 200,
        overflow:"hidden",
        left:"20%"
    },
    cardTitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:30,
        marginTop:10,
        marginRight:20,

    },
    image:{
        width:80,
        height:80,
        marginLeft: "30%",
        marginTop: 5
    },
    cardBottom:{
        flexDirection: "row",
        justifyContent: "space-between",
        margin:10
    },
    stok:{
        alignItems:"center",
        color:"#699FA0",
        fontSize:15
    }
});

Books.navigationOptions=data=>{
    return{
        headerTitle: "Kitaplar",
        headerRight:()=><FontAwesome
            name={"shopping-cart"}
            size={30}
            color={"#FF7F00"}
            style={{marginRight: 15}}
            onPress={()=>{
                data.navigation.navigate("cartScreen")
            }
            }
        />
    }
}

export default Books;
