/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomePage: () => React$Node = ({navigation}) => {
  const [palabra, setPalabra] = useState('teletrabajo');

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
                <TextInput onChangeText={(text) => setPalabra(text)} />
              </View>

              <View style={styles.containerBotonBuscar}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Results', {palabra: palabra})
                  }
                  style={styles.botonBuscar}>
                  <Text style={styles.textoBoton}>Buscar</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.contenido}>
              <Text style={styles.titulo}>Temas populares</Text>
              <View>
                <TouchableOpacity
                  style={styles.article}
                  onPress={() =>
                    navigation.navigate('Results', {palabra: 'Teletrabajo'})
                  }>
                  <Text style={styles.titulitos}>Teletrabajo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.article}
                  onPress={() =>
                    navigation.navigate('Results', {palabra: 'Musica'})
                  }>
                  <Text style={styles.titulitos}>Música</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.article}
                  onPress={() =>
                    navigation.navigate('Results', {palabra: 'Covid'})
                  }>
                  <Text style={styles.titulitos}>Covid</Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: '#ffdead',
  },

  body: {
    flex: 10,
    backgroundColor: '#ffdead',
  },
  article: {
    height: windowHeight / 10,
    backgroundColor: '#004080',
    width: windowWidth-20,
    marginTop: 10,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 20,
    borderWidth:2,
    borderColor:'#0f1414'
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
    height: windowHeight / 10,
    backgroundColor: '#ffb42b',
    borderRadius: 20,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation:20
  },
  containerInputBuscador: {
    margin: 10,
    flex: 3,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    borderColor: '#fff',
  },
  containerBotonBuscar: {
    margin: 10,
    flex: 1,
  },
  botonBuscar: {
    backgroundColor: '#004080',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  contenido: {
    flex: 7,
    alignItems: 'center',
  },
  extracto: {
    fontSize: 20,
  },
  titulitos: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomePage;
