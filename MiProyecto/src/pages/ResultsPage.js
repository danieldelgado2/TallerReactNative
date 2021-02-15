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
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  ActivityIndicator
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

const ResultsPage: () => React$Node = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const renderItem = ({item}) => ( <TouchableOpacity
    style={styles.article}
    onPress={() => navigation.navigate('Detail', {articulo: item})}>
    <Text style={styles.tituloArticulo}>{item.title}</Text>
  </TouchableOpacity>);

  useEffect(() => {
    fetch(
      'https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&format=json&origin=*&utf8=&srsearch=' +
        route.params.palabra,
    )
      .then((response) => response.json())
      .then((json) => {
        let lista = [];
        json.query.search.forEach((elemento) => {
          let jsonDatos = {
            id: elemento.pageid.toString(),
            title: elemento.title,
          };

          lista.push(jsonDatos);
        });
        setData(lista);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
            <Text style={styles.titulo}>Resultados de la búsqueda</Text>
            {isLoading ? (
              <View>
                <Text style={styles.titulo}>Cargando datos...</Text>
                <View>
                  <ActivityIndicator size={"large"} color={"#0000ff"}/>
                </View>
              </View>
            ) : (
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            )}
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
    backgroundColor: '#ffdead',
  },
  article: {
    backgroundColor: '#004080',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 20,
    borderWidth:2,
    borderColor:'#0f1414'
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  tituloArticulo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  tinyLogo: {
    flex: 2,
  },
  contenido: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 25,
    textAlign: 'justify',
  },
  containerContenido: {
    padding: 10,
  },
});

export default ResultsPage;
