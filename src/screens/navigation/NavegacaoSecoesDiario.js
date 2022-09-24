import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../diarios/HomeScreen';
import DiarioCasa from '../diarios/DiarioCasa';
import DiarioEscola from '../diarios/DiarioEscola';
import DiarioTrabalho from '../diarios/DiarioTrabalho';


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
        <Stack.Navigator initialRouteName='DiarioCasa'>
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
                component={DiarioCasa}
                options={() => {
                    optionsHeader.title = "Casa"
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
