/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useEffect }  from 'react';
import 'react-native-gesture-handler';

import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Animated
} from 'react-native';





const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          useNativeDriver:true,
          toValue: 1,
          duration: 10000,
        }
      ).start();
    }, [fadeAnim])
  
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
}

const AnimationsPage: () => React$Node = ({}) => {

  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    </View>
  )

  
};

const styles = StyleSheet.create({
  
 container:{
     height : windowHeight,
     width: windowWidth,
     backgroundColor: '#fff'
 },

 body: {
    flex: 10,
    backgroundColor: '#00a693',
 },
 article: {
     height: windowHeight/8,
     backgroundColor: '#fbe870',
     marginTop: 10,
     marginHorizontal:10,
     padding: 10,
     borderRadius:10
     

 },
 fotoBanner: {
    flex:5,
  },
 titulo:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold'
 },
 buscador:{
     flex:1,
     backgroundColor: '#fff',
     borderRadius:5,
     margin:10,
     flexDirection:'row',
 },
 containerInputBuscador:{
    margin:10,
    flex:3,
    borderColor: '#000',
    borderWidth:1
    
 },
 containerBotonBuscar:{
     margin:10,
     flex:1
 },
 botonBuscar:{
     backgroundColor:'#fff',
     elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
 },
 contenido:{
   flex:7
 }


});

export default AnimationsPage;
