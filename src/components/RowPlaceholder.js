import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


const RowPlaceholder = () => {
    return (
        <View style={styles.rowLista}>
            <Text style={styles.simboloLista}>&#8226;</Text>
            <View style={styles.placeholderTarefas}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    rowLista: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    simboloLista: {
        fontSize: 16,
        padding: 5
    },
    placeholderTarefas: {
        width: '100%',
        height: null,
        backgroundColor: '#cccccc7b',
    }
});

export default RowPlaceholder;
