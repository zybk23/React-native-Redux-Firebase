import React,{useState} from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import CartItem from './CartItem';



const OrderItem = (props) => {
    const [showDetails,setShowDetails]=useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>{props.amount.toFixed(2)}TL</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={"#C2185B"} title={!showDetails?"Show Details":"Hide Details"}
                onPress={()=>{
                    setShowDetails(prevState => !prevState)
                }}
            />
            {
                showDetails && <View style={styles.detailItems}>
                    {
                        props.items.map((cartItem,id)=>{
                            return (
                                <CartItem
                                    key={id}
                                    quantity={cartItem.quantity}
                                    amount={cartItem.sum}
                                    title={cartItem.productTitle}
                                />
                            )
                        })
                    }
                </View>
            }
        </View>
    );
};
const styles=StyleSheet.create({
    orderItem:{
        shadowOpacity:0.6,
        shadowColor:"black",
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:"white",
        margin:20,
        padding:10,
        alignItems: "center"
    },
    summary:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: "100%"
    },
    totalAmount:{
        fontSize:16
    },
    date:{
        fontSize: 16,
        color:"#888"
    },
    detailItems:{
        width:"100%"
    }
});
export default OrderItem;
