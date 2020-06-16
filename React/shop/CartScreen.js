import React from "react"

import {View,Text,FlatList,Button,StyleSheet} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import CartItem from '../items/CartItem';
import {removeFromCart} from '../../Redux/actions/cartActions';
import {addOrder} from '../../Redux/actions/orderActions';
import FontAwesome from "react-native-vector-icons/FontAwesome"


const CartScreen=props=>{
    const totalAmount=useSelector(state=>state.cartListReducer.totalAmount);
    const cartItems=useSelector(state=>{
        const transformedCartItems=[];
        for (const key in state.cartListReducer.items){
            transformedCartItems.push({
                productId:key,
                productTitle:state.cartListReducer.items[key].productTitle,
                productPrice:state.cartListReducer.items[key].productPrice,
                quantity:state.cartListReducer.items[key].quantity,
                sum:state.cartListReducer.items[key].sum,
            })
        }
        return transformedCartItems.sort((a,b)=>a.productId>b.productId?1:-1);
    });

    const dispatch=useDispatch();
    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total:
                    <Text style={styles.amount}>
                        {Math.round(totalAmount.toFixed(2)*100)/100}TL
                    </Text>
                </Text>
                <Button color={"#F75C00"} title={"Order Now"}
                        onPress={()=>{
                            dispatch(addOrder(cartItems,totalAmount))
                        }}
                />
            </View>
            <FlatList
                data={cartItems}
                keyExtractor={item=>item.productId}
                renderItem={itemData=>{
                    return (
                        <CartItem
                            quantity={itemData.item.quantity}
                            title={itemData.item.productTitle}
                            amount={itemData.item.sum}
                            deletable
                            onRemove={()=>{
                                dispatch(removeFromCart(itemData.item.productId))
                            }}
                        />
                    )
                }}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        margin:20,

    },
    summary:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginBottom:20,
        padding:10,
        shadowOpacity:0.6,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
    },
    summaryText:{
        fontSize:18,

    }

});

CartScreen.navigationOptions=data=>{
    return {
        headerTitle: "Sepetiniz",
        headerRight:()=><FontAwesome name={"reorder"} size={25} color={"red"}
           onPress={()=>data.navigation.navigate("order")}
            style={{marginRight:10}}
        />

    }
}
export default CartScreen;
