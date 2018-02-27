import React, {Component} from 'react';
import { View, Text, TouchableOpacity  } from 'react-native';
import { styles } from './styles';

const DefaultButton = props =>{
    let color = props.color ? {backgroundColor: props.color} : null;
    let width = props.width ? {width: props.width} : null;
    return(<View style={styles.buttonContainer}>
        <TouchableOpacity
            title={props.title}
            onPress={props.method}
            activeOpacity={1}
            style={[styles.button, color, width]}>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </TouchableOpacity>
    </View>)};

export { DefaultButton };

