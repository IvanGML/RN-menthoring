import React, {Component} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import * as stylesGlobal from '../../styles';

const Spinner = ({size}) =>
    <View style={styles.spinner} >
        <ActivityIndicator
            animating={true}
            color={stylesGlobal.SPINNER}
            size={size || 100}
        />
    </View>

export { Spinner };

