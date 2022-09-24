// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {
    View,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import SecaoPlanejamento from '../../components/SecaoPlanejamento';

const HomeScreen = () => {
    const disponibilizarSecoes = () => {
        const tituloSecoes = [
            'Casa',
            'Escola',
            'Trabalho'
        ];

        let secoes = [];
        for (let i = 0; i < tituloSecoes.length; i++) {
            secoes.push(
                <SecaoPlanejamento
                    key={i}
                    titulo={tituloSecoes[i]}
                />
            );
        }
        return secoes;
    };

    const secoes = disponibilizarSecoes();
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={ styles.conteinerSecoes }>
                {secoes}
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
