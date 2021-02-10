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
  Dimensions,
  Text,
  Button,
  Image,
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

const DetailPage: () => React$Node = ({navigation,route}) =>{

    console.log('objeto venido de resultsPage =>> ' + route.params.article);
const itemsito = {
    title:'tituloDetal',
    extract:'extractoDetail'
}

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View style={styles.container}>
                    <Image style={styles.tinyLogo} source={{
                        uri: 'https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg',
                        }}/>
                    <View style={styles.body}>
                        
                        <Text style={styles.titulo}>Artículo: NOMBRE DE ARTICULO</Text>
                        <ScrollView>
                        <View style={styles.containerContenido}>
                            <Button  onPress= {()=>navigation.navigate('Home')}
                            title="Ir a Home"
                            color="#841584" style={styles.boton}/>
                            <Text style={styles.contenido}>
                            {itemsito.extract}
                            </Text>
                            
                        </View>
                        
                        </ScrollView>
                    </View>
                    </View>
                </SafeAreaView>
            </>
        );
    
}


const styles = StyleSheet.create({
  
 container:{
     height : windowHeight,
     width: windowWidth,
     backgroundColor: '#fff'
 },
 buscador: {
     flex:2,
    
 },
 body: {
    flex: 6,
    backgroundColor: '#36454f',
 },
 article: {
     height: windowHeight/8,
     backgroundColor: '#fbe870',
     marginTop: 10,
     marginHorizontal:10,
     padding: 10,
     borderRadius:10
 },
 titulo:{
    fontSize:20,
    textAlign:'center',
    margin:10,
    fontWeight:'bold',
    color: '#fff'
 },
 tinyLogo: {
    flex:2,
  },
contenido: {
    color: '#fff',
    fontSize:15,
    lineHeight:25,
    textAlign:'justify',  
  },
  containerContenido:{
      padding:10
  }
});

export default DetailPage;
