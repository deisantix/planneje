import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import ListaPlaceholder from './ListaPlaceholder';


const SecaoPlanejamento = (props) => {
    return (
        <View style={styles.secaoPlanejamento}>
            <Text style={styles.tituloSecao}>{ props.tituloSecao }</Text>

            <ListaPlaceholder />
        </View>
    );
};

const styles = StyleSheet.create({
    secaoPlanejamento: {
        width: '43%',
        maxWidth: 250,
        height: 180,
        backgroundColor: 'white',
        borderRadius: 16,
        margin: 10,
        padding: 20,
    },
    tituloSecao: {
        fontSize: 18,
        fontWeight: 600
    },
});

export default SecaoPlanejamento;
