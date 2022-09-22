// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

import React, {useState, createRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import Loader from '../../components/Loader';


const LoginScreen = ({navigation}) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            alert('Por favor, insira seu email');
            return;
        }
        if (!userPassword) {
            alert('Por favor, insira a senha');
            return;
        }
        setLoading(true);

        let dataToSend = { email: userEmail, password: userPassword };
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
    };

    return (
        <View style={styles.mainBody}>
        <Loader loading={loading} />
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
            }}>
            <View>
            <KeyboardAvoidingView enabled>
                <View style={{alignItems: 'center'}}>
                <Image
                    source={require('../../assets/planneje.png')}
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'contain',
                        marginTop: 10,
                    }}
                />
                </View>
                <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserEmail) =>
                        setUserEmail(UserEmail)
                    }
                    placeholder="Insira seu email" //dummy@abc.com
                    placeholderTextColor="#0000009a"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                        passwordInputRef.current &&
                        passwordInputRef.current.focus()
                    }
                    underlineColorAndroid="#f000"
                    blurOnSubmit={false}
                />
                </View>
                <View style={styles.SectionStyle}>
                <TextInput
                    style={styles.inputStyle}
                    onChangeText={(UserPassword) =>
                        setUserPassword(UserPassword)
                    }
                    placeholder="Insira sua senha" //12345
                    placeholderTextColor="#0000009a"
                    keyboardType="default"
                    ref={passwordInputRef}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                    secureTextEntry={true}
                    underlineColorAndroid="#f000"
                    returnKeyType="next"
                />
                </View>
                {errortext != '' ? (
                <Text style={styles.errorTextStyle}>
                    {errortext}
                </Text>
                ) : null}
                <TouchableOpacity
                style={[styles.buttonStyle, styles.buttonLogin]}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonStyle, styles.buttonRegister]}>
                <Text
                    style={styles.buttonTextStyle}
                    onPress={() => navigation.navigate('RegisterScreen')}>
                    FAZER CADASTRO
                </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </View>
        </ScrollView>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7895B2',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    buttonStyle: {
        borderWidth: 0,
        height: 50,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 10,
        marginBottom: 5,
    },
    buttonTextStyle: {
        color: '#000000',
        paddingVertical: 15,
        fontSize: 16,
    },
    buttonLogin: {
        marginTop: 30,
        backgroundColor: '#E8DFCA'
    },
    buttonRegister: {
        backgroundColor: '#AEBDCA'
    },
    inputStyle: {
        flex: 1,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 32,
        fontSize: 16,
        color: '#000000',
        borderColor: 'rgb(54, 71, 72)',
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
