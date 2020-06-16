/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,Component} from 'react';
import Nav from './React/Navigation/Nav';
import configureStore from './Redux/reducers/configureStore';
import {Provider} from "react-redux"
import firebase from 'firebase';




const store=configureStore();

class App extends Component {
    constructor() {
        super();
        firebase.initializeApp(
            {
                apiKey: "AIzaSyC_bSNSUtqGcvVX072h9WUqHEtqKAkmwj4",
                authDomain: "book-shoping.firebaseapp.com",
                databaseURL: "https://book-shoping.firebaseio.com",
                projectId: "book-shoping",
                storageBucket: "book-shoping.appspot.com",
                measurementId: "860563931669",
            });
    }



    render() {
        return (
            <Provider store={store}>
                <Nav/>
            </Provider>
        );
    }

}




export default App;
