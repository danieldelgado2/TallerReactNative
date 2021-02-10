/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Dimensions,
  Text,
  Image,
  FlatList,
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



const Item = ({ title }) => (
    <View style={styles.article}>
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </View>
  );



export default FethApiPage = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
            <Image style={styles.fotoBanner} source={{
            uri: 'https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg',
            }}/>
            <View style={styles.body}>
                
                <Text style={styles.titulo}>Lista de películas</Text>
                
                { isLoading ?  <ActivityIndicator/> :
                  <FlatList
                    data={data}
                    renderItem={({ item }) => (
                      <Item>{item.title}</Item>
                    )}
                    keyExtractor={({ id }, index) => id}/>  
                }

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
 buscador: {
     backgroundColor: '#080808',
     flex:1,
     margin: 10
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
 }


});

