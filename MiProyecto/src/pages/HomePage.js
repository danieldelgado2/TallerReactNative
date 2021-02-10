/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  View,
  Button,
  Dimensions,
  Text,
  Image,
  TextInput,
  FlatList,
  StatusBar,
  TouchableOpacity,
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

// const DATA = [
//   {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: 'First Item',
//   },
//   {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'Second Item',
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Third Item',
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72asdf',
//       title: 'Fourth Item',
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72ffd',
//       title: 'Fifth Item',
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72233',
//       title: 'Sixth Item',
//   },
//   ];

const HomePage: () => React$Node = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [palabra, setPalabra] = useState();
  var palabrita = 'telecommuting';

  const Item = ({item}) => (
    <TouchableOpacity
      style={styles.article}
      onPress={() => navigation.navigate('Detail')}>
      <Text style={styles.titulo}>{item.title}</Text>
      <Text>{item.extract}</Text>
      {/* <WebView style={styles.extracto}  originWhitelist={['*']}
    source={{ html: item.extract}}/> */}
    </TouchableOpacity>
  );

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
            style={styles.fotoBanner}
            source={{
              uri:
                'https://cdn.wpbeaveraddons.com/wp-content/uploads/luca-micheli-422052-unsplash-2.jpg',
            }}
          />
          <View style={styles.body}>
            <View style={styles.buscador}>
              <View style={styles.containerInputBuscador}>
                <TextInput
                  onChangeText={(text) => setPalabra(text)}
                  value={value}
                  onKeyPress={useState(() => setPalabra(value))}
                />
              </View>

              <View style={styles.containerBotonBuscar}>
                <Button
                  onPress={() =>
                    navigation.navigate('results', {palabra: palabra})
                  }
                  title="Buscar"
                  style={styles.botonBuscar}
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
            <View style={styles.contenido}>
              <Text style={styles.titulo}>Artículos populares</Text>

              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  data={data}
                  renderItem={({item}) => <Item item={item} />}
                  keyExtractor={(item) => item.pageid.toString()}
                />
              )}
            </View>
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
    flex: 10,
    backgroundColor: '#00a693',
  },
  article: {
    height: windowHeight / 4,
    backgroundColor: '#fbe870',
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  fotoBanner: {
    flex: 5,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  buscador: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
  },
  containerInputBuscador: {
    margin: 10,
    flex: 3,
    borderColor: '#000',
    borderWidth: 1,
  },
  containerBotonBuscar: {
    margin: 10,
    flex: 1,
  },
  botonBuscar: {
    backgroundColor: '#fff',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
  },
  contenido: {
    flex: 7,
  },
  extracto: {
    fontSize: 20,
  },
});

export default HomePage;
