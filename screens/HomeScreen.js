//import liraries
import React, { Component } from 'react';
//TouchableOpacity adicionado, classe criada para adicionar avisos sem ação
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
// classes importadas do native-base para adicionar a Header e os icones
import {Container,Content,Header,Left,Right,Icon,Item,Input} from 'native-base';
//FAIcon classe que tem a função de pegar os icones do FontAwesome
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'
// create a component
class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={[{backgroundColor:'#3a455c', height:90, borderBottomColor:'#757575'},
         styles.androidHeader]}>
          <Left style={{ flexDirection:'row' }}>
            <Icon name="md-menu" style={{color: 'white', marginRight: 15}}/>
            <FAIcon name="amazon" style={{fontSize:32, color:"white"}}/>
          </Left>

          <Right>
            <Icon name="md-cart" style={{color: 'white'}}/>
          </Right>
        </Header>
        <View style={{position:'absolute', left:0, right:0,top:90,height:70, backgroundColor: '#3a455c',
      flexDirection:'row', alignItems:'center',paddingHorizontal:5}}>
          <TouchableOpacity>
            <View style={{width:100,backgroundColor:'#e7e7eb', height:50, borderRadius:4, padding:10}}>
              <Text style={{fontSize: 12}}>
                Shop by
              </Text>
              <Text style={{fontWeight: 'bold',}}>
                Category
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flex:1,height:"100%",marginLeft:5, justifyContent:'center'}}>
              <Item style={{backgroundColor:'white', paddingHorizontal:10, borderRadius: 4}}>
                <Icon name="search" style={{fontSize:20,paddingTop:5}}/>
                <Input placeholder="Search" />
              </Item>
            </View>
        </View>
        <Content style={{backgroundColor:'#d5d5d6', marginTop:70}}>
          <View style={{height:50, backgroundColor:'white',flexDirection:'row',paddingHorizontal:5,
          alignItems:'center', justifyContent:'space-between'}}>
            <Text>Hello, Rômulo Ferreira</Text>
            <View style={{flexDirection:'row'}}>
              <Text>Your Account</Text>
              <Icon name="arrow-forward" style={{fontSize:18}}/>
            </View>
          </View>
          <Swiper
            autoplay={true}
            style={{height:100}}>

            <View style={{flex: 1}}>

              <Image
               style={{flex:1, height:null, width:null, resizeMode:'contain'}}
               source={require('../assents/swiper_2.jpg')}/>

            </View>
            <View style={{flex: 1}}>

              <Image
                style={{flex:1, height:null, width:null, resizeMode:'contain'}}
                source={require('../assents/swiper_3.jpg')}/>

            </View>

            <View style={{flex: 1}}>

              <Image
                  style={{flex:1, height:null, width:null, resizeMode:'contain'}}
                  source={require('../assents/swiper_2.jpg')}/>

            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidHeader:{
    ...Platform.select({
        android: {
          paddingTop: StatusBar.currentHeight,
        }
    })
  }
});

//make this component available to the app
export default HomeScreen;
