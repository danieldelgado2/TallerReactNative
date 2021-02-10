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
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



// DIMENSIONES DE LA PANTALLA
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let listaItemsHorizontal = [];
let listaItemsVerticalColumnas = [];



for(let i = 1; i<=5;i++){
    let item = {id: i,title:'Item ' + i}
    listaItemsHorizontal.push(item);
}

for(let i = 6; i<=16;i++){
    let item = {id: i,title:'Item ' + i}
    listaItemsVerticalColumnas.push(item);
}
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72asdf',
        title: 'Fourth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72ffd',
        title: 'Fifth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72233',
        title: 'Sixth Item',
    },
    ];

const Item1 = ({ title }) => (
    <View style={styles.item1}>
      <Text style={styles.title}>{title}</Text>
      <Text></Text>
    </View>
  );
const Item2 = ({ title }) => (
<View style={styles.item2}>
    <Text style={styles.title}>{title}</Text>
    <Text></Text>
</View>
);
const Item3 = ({ title }) => (
<View style={styles.item3}>
    <Text style={styles.title}>{title}</Text>
    <Text></Text>
</View>
);



const FlatListPage: () => React$Node = () => {

    const renderItem1 = ({ item }) => (
        <Item1 title={item.title} />
        );
    const renderItem2 = ({ item }) => (
    <Item2 title={item.title} />
    );
    const renderItem3 = ({ item }) => (
    <Item3 title={item.title} />
    );
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

          
      
        <View style={styles.container}>
            
            <View style={styles.body}>
               <View style={styles.containerListaHor}>
                    <Text style={styles.titulo}>FlatList horizontal</Text>
                    <FlatList
                            data={listaItemsHorizontal}
                            horizontal={true}
                            initialNumToRender={3}
                            renderItem={renderItem1}
                            keyExtractor={item => item.id}/> 
               </View>
                <View style={styles.containerListaVerCol}>
                   
                    <View style={styles.verticalUnaColumna}>
                        <FlatList
                            data={listaItemsHorizontal}
                            numColumns={1}   
                            renderItem={renderItem3}
                            keyExtractor={item => item.id}/>  
                    </View>
                    <View style={styles.verticalDosColumnas}>
                            <FlatList
                                data={listaItemsVerticalColumnas}
                                numColumns={2}   
                                renderItem={renderItem2}
                                keyExtractor={item => item.id}/>  
                        </View>
                   
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
 buscador: {
     backgroundColor: '#080808',
     flex:1,
     margin: 10
 },
 body: {
    flex: 10,
    backgroundColor: '#00a693',
 },
 item1: {
     height: 100,
     width:100,
     backgroundColor: '#fbe870',
     marginTop: 10,
     marginHorizontal:10,
     padding: 10,
     borderRadius:10
 },
 item2: {
    height: 100,
    width:100,
    backgroundColor: '#e97451',
    marginTop: 10,
    marginHorizontal:10,
    padding: 10,
    borderRadius:10
 },
 item3: {
    height: 100,
    width:100,
    backgroundColor: '#36454f',
    marginTop: 10,
    marginHorizontal:10,
    padding: 10,
    borderRadius:10
 },

 titulo:{
    fontSize:20,
    textAlign:'center',
    marginTop:10,
    fontWeight:'bold'
 },

 containerListaHor:{
     margin:10,
     flex: 1
 },
 containerListaVerCol:{
    margin:10,
    flex: 2,
    flexDirection:'row',
    alignItems:'center'
 },
 listasVerticales:{
     flexDirection:'row',
     justifyContent:'center'
 },
 verticalUnaColumna: {
     flex: 1
 },
 verticalDosColumnas: {
    flex: 2
}


});

export default FlatListPage;
