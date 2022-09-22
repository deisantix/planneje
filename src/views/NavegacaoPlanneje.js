import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import SettingsScreen from './SettingsScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const diarioStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='Diario'>
            <Stack.Screen
                name="Diario"
                component={Home}
                options={{
                    title: 'Planneje',
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

const perfilStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName='Perfil'>
            <Stack.Screen
                name="Perfil"
                component={SettingsScreen}
                options={{
                    title: 'Perfil'
                }}
            />
        </Stack.Navigator>
    );
};


const NavegacaoPlanneje = () => {
    return (
        <Tab.Navigator initialRouteName='diarioStack'>
            <Tab.Screen
                name="diarioStack"
                component={diarioStack}
            />
            <Tab.Screen
                name="perfilStack"
                component={perfilStack}
            />
        </Tab.Navigator>
    );
};

export default NavegacaoPlanneje;
