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

} from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailPage: () => React$Node = ({navigation, route}) => {
  

  const [isLoading, setLoading] = useState(true);
  const [articulo, setData] = useState({title:'Cargando datos...'});

  useEffect(() => {
    fetch(
      'https://es.wikipedia.org/w/api.php?action=query&titles=' +
      route.params.articulo.title +
        '&prop=extracts&format=json&exintro=1',
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
<p>calskdjfalsdkjfñalsdkj</p>
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri:
                'https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg',
            }}
          />
          <View style={styles.body}>

            <View style={styles.botones}>

              <View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Results',{palabra:articulo.title})}
                        style={styles.botonHome}>
                        <Text style={styles.textoBoton}>Más resultados</Text>
                      </TouchableOpacity>
              </View>
              <View style={styles.containerBotonResults}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                        style={styles.botonHome}>
                        <Text style={styles.textoBoton}>Ir a Home</Text>
                      </TouchableOpacity>
              </View>

            </View>
            
            <Text style={styles.titulo}>{articulo.title}</Text>
            <ScrollView>
              <View style={styles.containerContenido}>
               

                { isLoading ? (<Text>Cargando...</Text>):(
                
                <View>
                  <Text style={styles.contenido}>{articulo.extract}</Text>
                  
                </View>
                )

                }
                
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#fff',
  },
  body: {
    flex: 6,
    backgroundColor: '#d6d0c1',
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  tinyLogo: {
    flex: 2,
  },
  contenido: {
    color:'black',
    fontSize: 15,
    lineHeight: 30,
    textAlign: 'justify',
  },
  containerContenido: {
    padding: 10,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    margin:5
  },
  botonHome: {
    backgroundColor: '#004080',
    elevation: 20,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width:windowWidth/2 - 60
  },
  botones:{
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between'
  }

 
});

export default DetailPage;
