import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ResultsPage from './ResultsPage';
import DetailPage from './DetailPage';
import HomePage from './HomePage';

const Main: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: '#ffdead',
              },
            }}/>
        <Stack.Screen name="Results" component={ResultsPage} options={{
              title: 'Resultados',
              headerStyle: {
                backgroundColor: '#ffdead',
              },
            }}/>
        <Stack.Screen name="Detail" component={DetailPage} options={{
              title: 'Detalles del artículo',
              headerStyle: {
                backgroundColor: '#ffdead',
              },
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
