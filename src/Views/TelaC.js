import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList} from 'react-native'

import User from '../components/User.js'

const dados=[
    {
      id:Math.random(),
      nome:"Bike",
      descricao: "aa",
      preco:"120,00",
      final:'130,00'
    },
    {
      id:Math.random(),
      nome:"Bikbuzina",
      descricao: "aa",
      preco:"12,00",
      final:'13,00'
    },
    {
      id:Math.random(),
      nome:"Bike",
      descricao: "aa",
      preco:"120,00",
      final:'130,00'
    }
  ]



const TelaC = (props) => {


    
    return (
        <SafeAreaView style={styles.container}>
      
        <Text style={styles.h1}>Confira nossos produtos!!!</Text>
 
      <View style={styles.containerUsers}>
        <FlatList
        data={dados}
        keyExtractor={(item)=>`${item.id}`}
        renderItem={({item})=>(
          <User nome={item.nome} descricao={item.descricao} preco={item.preco} final={item.final}/>
        )}/>

      </View>

    </SafeAreaView>

    )
}

export default TelaC

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
      flex:3,
      justifyContent:'flex-end',
      alignItems:'center',
      width:500,
  },
  h1:{
    fontSize:20,
    color:"#fff"
  },
 containerUsers:{
    flex:7,
    width: 350,
  }
});