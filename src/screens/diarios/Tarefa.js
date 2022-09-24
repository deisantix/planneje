import React from 'react';
import {
    View,
    Text
} from 'react-native';


const Tarefa = ({ route }) => {
    const tarefa = route.params.props;

    return (
        <View>
            <Text>{ tarefa.titulo }</Text>
            <Text>{ tarefa.data }</Text>
        </View>
    );
};

export default Tarefa;
