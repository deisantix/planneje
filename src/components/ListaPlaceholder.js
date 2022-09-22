import React from 'react';
import {
    View
} from 'react-native';

import RowPlaceholder from './RowPlaceholder';


const ListaPlaceholder = () => {
    return (
        <View>
            <RowPlaceholder />
            <RowPlaceholder />
            <RowPlaceholder />
        </View>
    );
};

export default ListaPlaceholder;
