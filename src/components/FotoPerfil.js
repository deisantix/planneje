import React from "react";
import {
    View,
    Image,
    StyleSheet
} from 'react-native';


const FotoPerfil = () => {
    return (
        <View style={styles.conteinerFoto}>
            <Image
                source={require('../assets/default-icon.jpg')}
                style={styles.foto}
            />
        </View>
    );
};

const tamanhoFoto = 150;

const styles = StyleSheet.create({
    conteinerFoto: {
        width: tamanhoFoto,
        height: tamanhoFoto,
        margin: 30,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    foto: {
        width: tamanhoFoto,
        height: tamanhoFoto
    }
});

export default FotoPerfil;
