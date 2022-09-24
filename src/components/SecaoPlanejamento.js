import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ListaPlaceholder from './ListaPlaceholder';


const SecaoPlanejamento = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.secaoPlanejamento}
            onPress={() => {
                navigation.navigate('Diario' + props.titulo);
            }}>
            <View>
                <Text style={styles.tituloSecao}>{ props.titulo }</Text>

                <ListaPlaceholder />
            </View>
        </TouchableOpacity>
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
