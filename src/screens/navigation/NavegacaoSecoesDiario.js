import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../diarios/HomeScreen';
import DiarioEscola from '../diarios/DiarioEscola';
import DiarioTrabalho from '../diarios/DiarioTrabalho';
import NavegacaoTarefasSecao from './NavegacaoTarefasSecao';


const Stack = createStackNavigator();

const NavegacaoSecoesDiario = () => {
    const optionsHeader = {
        headerStyle: {
            backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    return (
        <Stack.Navigator initialRouteName='DiarioHome'>
            <Stack.Screen
                name="DiarioHome"
                component={HomeScreen}
                options={() => {
                    optionsHeader.title = "Planneje"
                    return optionsHeader;
                }}
            />

            <Stack.Screen
                name="DiarioCasa"
                component={NavegacaoTarefasSecao}
                options={() => {
                    optionsHeader.headerShown = false;
                    return optionsHeader;
                }}
            />

            <Stack.Screen
                name="DiarioEscola"
                component={DiarioEscola}
                options={() => {
                    optionsHeader.title = "Escola"
                    return optionsHeader;
                }}
            />

            <Stack.Screen
                name="DiarioTrabalho"
                component={DiarioTrabalho}
                options={() => {
                    optionsHeader.title = "Trabalho"
                    return optionsHeader;
                }}
            />
        </Stack.Navigator>
    );
}

export default NavegacaoSecoesDiario;
