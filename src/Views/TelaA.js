import React from 'react'
import { View,StyleSheet, Text, Image } from 'react-native'





const TelaA = (props) => {
    return (
            <View style={css.container}>
                <Text style={css.titulo}> Seja bem-vindo ao ALLBIKES</Text>
                <Image source={require('../../assets/logo.jpg')} 
                style={css.logo}
      />
            
            </View>
    );
};

export default TelaA

const css = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ea0",
    },
    titulo: {
        fontSize: 40,
        Color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,

    },
})