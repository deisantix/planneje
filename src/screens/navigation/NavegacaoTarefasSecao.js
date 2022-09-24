import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigationState } from '@react-navigation/native';

import DiarioCasa from '../diarios/DiarioCasa';
import Tarefa from '../diarios/Tarefa';


const Stack = createStackNavigator();

const NavegacaoTarefasSecao = () => {
    const navigationState = useNavigationState(state => state);

    return (
        <Stack.Navigator initialRouteName='Secao'>
            <Stack.Screen
                name="Secao"
                component={DiarioCasa}
                options={() => {
                    const rotas = navigationState.routes;
                    const index = navigationState.index;

                    if (rotas[index].name === 'DiarioCasa') {
                        return {title: 'Casa'};
                    }
                }}
            />

            <Stack.Screen
                name="Tarefa"
                component={Tarefa}
            />
        </Stack.Navigator>
    );
};

export default NavegacaoTarefasSecao;
