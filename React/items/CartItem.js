import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"


const CartItem = ({quantity,title,amount,onRemove,deletable}) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{quantity}x</Text>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>{amount.toFixed(2)}TL</Text>
                {
                    deletable ?(
                        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
                            <FontAwesome name={"remove"} size={20} color={"red"}/>
                        </TouchableOpacity>
                    ): null
                }


            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    deleteButton:{
        marginLeft:20
    },
    cartItem:{
        padding:10,
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20
    },
    itemData:{
        flexDirection: "row",
        alignItems:"center",

    },
    quantity:{
        color:"#888",
        fontSize:16,
    },
    title:{
        fontSize: 16
    },
    amount:{
        fontSize:16
    }
});

export default CartItem;
