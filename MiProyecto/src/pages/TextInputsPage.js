/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Dimensions,
  Text,
  Image,
  TextInput,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;






let miKeyboardType = 'phone-pad';

if(Platform.OS !== 'ios') miKeyboardType = 'email-address';




const TextInputsPage: () => React$Node = () => {

    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

          
      
        <View style={styles.container}>
            <Text style={styles.titulo}>Ejemplos de TextInput</Text>
            <View style={styles.body}>

                <Text style={styles.label}>Input de tipo "emailAdress"</Text>
                <View style={styles.textInputContainer}>
                    <TextInput textContentType={'emailAddress'} keyboardType={'email-address'}/>
                </View>

                <Text style={styles.label}>Input de tipo "password"</Text>
                <View style={styles.textInputContainer}>
                    <TextInput textContentType={'password'} secureTextEntry={true}/>
                </View>

                <Text style={styles.label}>Input de tipo "URL"</Text>
                <View style={styles.textInputContainer}>
                    <TextInput textContentType={'URL'} keyboardType={miKeyboardType} />
                </View>

                <Text style={styles.label}>Input de tipo "telephoneNumber"</Text>
                <View style={styles.textInputContainer}>
                    <TextInput textContentType={'telephoneNumber'} keyboardType={'phone-pad'}/>
                </View>
     
            
            
            </View>
        </View>

        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
 container:{
     height : windowHeight,
     width: windowWidth,
     backgroundColor: '#fff'
 },

 body: {
     flex:1,
    backgroundColor: '#00a693',
 },
 
 titulo:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold'
 },
 
 textInputContainer:{
    backgroundColor:'#fff',
    borderRadius:10,
    marginBottom:20,
    marginHorizontal:20
 },
 textInput:{
     backgroundColor:'#000'
 },
 label:{
     marginHorizontal:20,
     fontSize:16,
     marginTop:20
 }



});

export default TextInputsPage;
