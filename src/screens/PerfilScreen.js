import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';

import FotoPerfil from '../components/FotoPerfil';


const PerfilScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.perfil}>
                <FotoPerfil />
                <Text style={styles.nomeUsuario}>Usuário</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    perfil: {
        flex: 1,
        alignItems: 'center'
    },
    nomeUsuario: {
        fontSize: 32
    }
});

export default PerfilScreen;
