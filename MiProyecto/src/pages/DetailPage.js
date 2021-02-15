/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import HTML from 'react-native-render-html';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const DetailPage: () => React$Node = ({navigation, route}) => {
  

  const [isLoading, setLoading] = useState(true);
  const [articulo, setData] = useState({title:'Cargando datos...'});

  useEffect(() => {
    fetch(
      'https://es.wikipedia.org/w/api.php?action=query&titles=' + route.params.articulo.title + '&prop=extracts&format=json&exintro=1',
    )
      .then((response) => response.json())
      .then((json) => {
        for(var [key,value] of Object.entries(json.query.pages)){
          setData({
            title:value.title,
            id:value.pageid,
            extract:value.extract
          });
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <ScrollView style={styles.scrollView}>
            <Image
              style={styles.imagen}
              source={{
                uri:
                  'https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg',
              }}
            />
            <View style={styles.viewBotones}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Results',{palabra:articulo.title})}
                  style={styles.boton}>
                  <Text style={styles.textoBoton}>Más resultados</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Home')}
                  style={styles.boton}>
                  <Text style={styles.textoBoton}>Ir a Home</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.titulo}>{articulo.title}</Text>
            <View style={styles.viewExtracto}>
              { isLoading ? 
                (<ActivityIndicator size={"large"} color={"#0000ff"}/>)
                :
                (<HTML source={{ html: `<head><style>*:{font-size:40;}</style></head><body>` + articulo.extract + `</body>`}}/>)
              }
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  titulo: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  imagen: {
   height:windowHeight/3,
   width:windowWidth
  },
  scrollView: {
    backgroundColor:'#ffdead',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    margin:5
  },
  boton: {
    backgroundColor: '#004080',
    elevation: 20,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width:windowWidth/2 - 60
  },
  viewBotones:{
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  viewExtracto:{
    height:windowHeight/2,
    marginHorizontal:10,
    marginBottom:10
  }
});

export default DetailPage;
