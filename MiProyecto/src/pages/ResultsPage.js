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
  const [palabra, setPalabra] = useState([]);
  var palabrita = 'telecommuting';

  const Item = ({item}) => {
    console.log(route.params.palabra);
    <TouchableOpacity
      style={styles.article}
      onPress={() => navigation.navigate('Detail', {articulo: item})}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text>{item.extract}</Text>
    </TouchableOpacity>;
  };

  useEffect(() => {
    fetch(
      'https://en.wikipedia.org/w/api.php?action=query&titles=' +
        palabrita +
        '&prop=extracts&format=json&exintro=1',
    )
      .then((response) => response.json())
      .then((json) => {
        let paginas = [];
        for (var [key, value] of Object.entries(json.query.pages)) {
          // value.extract = value.extract.replace(/<.*\n*>/mg,)
          paginas.push(value);
        }
        setData(paginas);
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
              <Text>Cargando...</Text>
            ) : (
              <FlatList
                data={data}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={(item) => item.pageid.toString()}
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
  buscador: {
    flex: 2,
  },
  body: {
    flex: 6,
    backgroundColor: '#36454f',
  },
  article: {
    height: windowHeight / 8,
    backgroundColor: '#fbe870',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  titulo: {
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
