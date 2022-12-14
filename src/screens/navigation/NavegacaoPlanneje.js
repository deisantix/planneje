import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import PerfilScreen from '../PerfilScreen';
import NavegacaoSecoesDiario from './NavegacaoSecoesDiario';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DiarioStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='NavegacaoSecoesDiario'>
            <Stack.Screen
                name="NavegacaoSecoesDiario"
                component={NavegacaoSecoesDiario}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

const PerfilStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='PerfilScreen'>
            <Stack.Screen
                name="PerfilScreen"
                component={PerfilScreen}
                options={{
                    title: 'Perfil',
                    headerStyle: {
                        backgroundColor: '#307ecc',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
        </Stack.Navigator>
    );
};


const NavegacaoPlanneje = () => {
    return (
        <Tab.Navigator
            initialRouteName='Diário'
            screenOptions={{headerShown: false}}>
            <Tab.Screen
                name="Diário"
                component={DiarioStack}
            />
            <Tab.Screen
                name="Perfil"
                component={PerfilStack}
            />
        </Tab.Navigator>
    );
};

export default NavegacaoPlanneje;
