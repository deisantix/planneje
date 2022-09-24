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
                <View style={styles.usuario}>
                    <FotoPerfil />
                    <Text style={styles.nomeUsuario}>Usuário</Text>
                </View>
                <View style={styles.opcoes}>
                    <Text style={styles.sair}>Sair</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    perfil: {
        flex: 1,
        alignItems: 'center'
    },
    usuario: {
        width: '100vw',
        height: 300,
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 30,
        shadowOpacity: 0.3,
    },
    nomeUsuario: {
        fontSize: 32
    },
    opcoes: {
        flex: 1,
        padding: 10,
        width: '100vw',
        backgroundColor: '##f2f2f2',
    },
    sair: {
        marginTop: 10,
        fontSize: 24,
        color: 'red',
    }
});

export default PerfilScreen;
