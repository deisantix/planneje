// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/


import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image
} from 'react-native';


const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setAnimating(false);
        AsyncStorage.getItem('user_id').then((value) =>
            navigation.replace(
            value === null ? 'Auth' : 'DrawerNavigationRoutes'
            ),
        );
        }, 5000);
    }, []);

    return (
        <View style={styles.container}>
        <Image
            source={require('../assets/planneje.png')}
            style={{width: '90%', resizeMode: 'contain'}}
        />
        <ActivityIndicator
            animating={animating}
            color="#000000"
            size="large"
            style={styles.activityIndicator}
        />
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7895B2',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
});
