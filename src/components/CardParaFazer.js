import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";


const CardParaFazer = (props) => {
    let corPrioridade;
    if (props.prioridade === 'alta') {
        corPrioridade = styles.prioridadeAlta;
    } else if (props.prioridade === 'media') {
        corPrioridade = styles.prioridadeMedia;
    } else {
        corPrioridade = styles.prioridadeBaixa;
    }

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.paraFazer}
            onPress={() => {
                navigation.navigate('Tarefa', { props });
            }}>
            <View>
                <Text style={styles.paraFazerTitulo}>{ props.titulo }</Text>
                <Text style={styles.data}>{ props.data }</Text>
            </View>
            <View style={[styles.prioridade, corPrioridade]}></View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    paraFazer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#FAAC5E',
        borderBottomWidth: 2,
        borderBottomColor: '#9E6D3C'
    },
    paraFazerTitulo: {
        fontSize: 20
    },
    data: {
        color: '#000000a4'
    },
    prioridade: {
        borderColor: '#000000',
        borderWidth: 1,
        width: 20, height: 20,
        borderRadius: '50%'
    },
    prioridadeAlta: {
        backgroundColor: 'red',
    },
    prioridadeMedia: {
        backgroundColor: 'orange',
    },
    prioridadeBaixa: {
        backgroundColor: 'lightblue'
    }
});

export default CardParaFazer;
