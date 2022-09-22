// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import SecaoPlanejamento from '../components/SecaoPlanejamento';


const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={ styles.conteinerSecoes }>
            <SecaoPlanejamento
                tituloSecao="Casa"
            />

            <SecaoPlanejamento
                tituloSecao="Escola"
            />

            <SecaoPlanejamento
                tituloSecao="Trabalho"
            />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    conteinerSecoes: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },

});
