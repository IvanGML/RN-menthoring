import {
    StyleSheet
} from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
    rightControll: {
        position: 'absolute',
        top: 40,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    picker: {
        // color: 'black',
        // backgroundColor: 'white',
        color: 'white',
        backgroundColor: 'black',
        minWidth: 80,
        marginLeft: 10,
    }
});

export {
    styles
};