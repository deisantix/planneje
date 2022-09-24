import React from 'react';
import {
    View,
    SafeAreaView,
} from 'react-native';
import CardParaFazer from '../../components/CardParaFazer';


const DiarioCasa = () => {
    return (
        <SafeAreaView>
            <View>
                <CardParaFazer
                    titulo="Lavar a louça"
                    data="Domingo, 09/10/2022"
                    prioridade="alta"
                />
                <CardParaFazer
                    titulo="Colocar roupa para lavar"
                    data="Quarta, 12/10/2022"
                    prioridade="media"
                />
            </View>
        </SafeAreaView>
    );
};

export default DiarioCasa;
