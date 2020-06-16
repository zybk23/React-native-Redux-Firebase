import React from 'react';
import {View,Text,FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../items/OrderItem';
import FontAwesome from "react-native-vector-icons/FontAwesome"




const OrderScreen = () => {
    const orders=useSelector(state=>state.orderListReducer.orders);
    return (
        <FlatList
            data={orders} keyExtractor={item=>item.id}
            renderItem={itemData=>
                <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            }
        />
    );
};

OrderScreen.navigationOptions=navData=>{
    return {
        headerTitle: "Önceki Siparişleriniz",
        headerLeft:()=><FontAwesome name={"list"} size={20} color={"#F66045"}
        onPress={()=>navData.navigation.toggleDrawer()} style={{marginLeft:10}}
        />
    }
};

export default OrderScreen;
