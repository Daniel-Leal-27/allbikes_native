import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity} from 'react-native'

const TelaB = (props) => {
    const [nome,setNome]=useState('');
    const [email,setEmail]=useState('');
    const [senha,setSenha]=useState('');

  const cadastro =()=>{
    alert(nome);
    alert(email);
    alert(senha);
  }

    return (
        
        <View style={styles.container}>
            {/* <Button navigation={props.navigation}/> */}
            <Text style={styles.titulo}>Allbikes</Text>
      
      
      <Image source={require('../../assets/logo.jpg')} 
        style={styles.logo}
      />
      <TextInput style={styles.input}
        placeholder="Nome"
        onChange={text=>setNome(text)}/>
      <TextInput style={styles.input}
        placeholder="E-mail"
        onChange={text=>setEmail(text)}/>
      <TextInput style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChange={text=>setSenha(text)}
      />
       <TouchableOpacity style={styles.btncadastro} onPress={()=>cadastro()}>
          <Text> Cadastrar </Text>
       </TouchableOpacity>
        </View>
    )
}

export default TelaB

const styles = StyleSheet.create({
    titulo: {
      backgroundColor: '#ea0',
      alignItems: 'center',
      fontSize: 30,
      width:'30%',
      textAlign:'center'
    },
    container: {
      flex: 1,
      backgroundColor: '#3b5998',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
      width: 150,
      height: 150,
      borderRadius: 100
    },
    input:{
     width:'50%',
     height:40,
     backgroundColor:'#ea0',
     borderRadius:50,
     padding:10,
     marginBottom:10,
    },
    btncadastro:{
  
      height:32,
      backgroundColor:'#fff',
      borderRadius:70,
      justifyContent:'center',
      textAlign:'center',
      marginBottom:10,
    }
  });