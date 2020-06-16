import React,{useEffect} from 'react';
import {Text,View,FlatList,StyleSheet} from "react-native"
import {useSelector,useDispatch} from 'react-redux';
import {get_categories} from '../../Redux/actions/categoryActions';
import FontAwesome from "react-native-vector-icons/FontAwesome"




const Categories = () => {
    const categories=useSelector(state=>state.categoryListReducer);
    const dispatch=useDispatch();
    //console.log("taha")
    useEffect(()=>{
        dispatch(get_categories())
    },[]);

    //console.log(categories);
    return (
        <View style={styles.category}>
                <FlatList

                    data={categories}
                    keyExtractor={key=>key.categoryName}
                    renderItem={itemData=>{
                        return(
                            <View style={styles.font}>
                                <Text style={styles.item}>{itemData.item.categoryName}</Text>
                                <FontAwesome name={"long-arrow-right"} size={20} color={"#722800"}/>
                            </View>

                        )
                    }}
                />
        </View>
    );
};

const styles =StyleSheet.create({
    category:{

    },

    font:{
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10,
        borderBottomWidth:3,
        borderColor:"#C1D2D2"
    }
});

Categories.navigationOptions=data=>{
    return {
        headerTitle: "Kategoriler"
    }
};

export default Categories;
