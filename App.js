// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import NavegacaoPlanneje from './src/screens/navigation/NavegacaoPlanneje';


const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
            title: 'Cadastro',
            headerStyle: {
                backgroundColor: '#7895B2',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            }}
        />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NavegacaoPlanneje">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{headerShown: false}}
                />

                <Stack.Screen
                    name="NavegacaoPlanneje"
                    component={NavegacaoPlanneje}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
