import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {SliderBox} from "react-native-image-slider-box"



 class Slider extends Component {
    state={
        images: [
            "https://cdn.yenicaggazetesi.com.tr/news/315434.jpg",
            "https://i.sozcu.com.tr/wp-content/uploads/2020/03/12/iecrop/kutuphane-dha_16_9_1584045724.jpg",
            "https://i4.hurimg.com/i/hurriyet/75/750x422/5cb07f3c0f254427785c306c.jpg",
            "https://www.turizmgunlugu.com/wp-content/uploads/2019/06/K%C3%BCt%C3%BCphane-temal%C4%B1-oteller-696x463.jpg", // Network image// Local image
        ]
    };
    render(){
        return(
            <View>
                <SliderBox
                    images={this.state.images}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    dotStyle={{
                        width: 12,
                        height: 12,
                        borderRadius:30,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                />
            </View>
        )
    }
    // other component code ...
}

export default Slider;
