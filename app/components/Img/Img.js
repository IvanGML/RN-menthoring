import React, {Component} from 'react';
import { Image, View, Dimensions } from 'react-native';

const DefaultImage = props => {
    let windowWidth = Dimensions.get('window').width;
    let widthChange = (windowWidth-60)/props.originalWidth;
    let mewWidth = props.originalWidth * widthChange;
    let newHeight = props.originalHeight * widthChange;
    return(
        <View>
            <Image source={props.source}
                   style={{width: mewWidth, height: newHeight}}/>
        </View>
    );
}


export { DefaultImage };

