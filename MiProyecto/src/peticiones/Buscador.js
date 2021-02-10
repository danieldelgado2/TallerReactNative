import React, { Component } from 'react';
import {
    View,
    Platform,
    TextInput,
    FlatList
  } from 'react-native';


export default class ListaArticulos extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource : null,
            isLoading: true
        }
    }

    componentDidMount(){
        return  fetch('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exsentences=10&exlimit=1&titles=Pet_door&explaintext=1&format=json')
        .then((response)=> response.json())
        .then((responseJson)=>{
            this.setState({isLoading:false,
            dataSource: responseJson.title})
            })
        .catch((error)=> console.log(error));
    }
    render(){
        
        if(this.state.isLoading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } {
            return(
                <View style={styles.container}>
                    <Text>Content Loaded</Text>
                </View>
            )
        }
    //     return <FlatList
    //     data={responseJson}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
        
    }
}

const styles = StyleSheet.create({
   
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'

    },
 
    title: {
      fontSize: 32,
    },
  });

