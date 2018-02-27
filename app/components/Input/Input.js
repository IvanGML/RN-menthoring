import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const CustomInput = props =>{
  let width = props.width ? {width: props.width} :  null;
  return(
    <TextInput
        editable={!props.notEditable}
        secureTextEntry={props.secureTextEntry}
        style={[styles.textInput, props.bg, width]}
        placeholder={props.placeholder}
        onChangeText={props.textHandler}
        value={props.value}
    />
  );
};
export { CustomInput };

