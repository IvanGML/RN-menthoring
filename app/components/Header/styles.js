import {
    StyleSheet
} from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
    header: {
        minHeight: 80,
        backgroundColor: style.HEADER_BACK,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 20,
        paddingTop: 40,
    },
    decoratedText: {
        color: style.HEADER_BRAKETS
    },
    normalText: {
        color: style.HEADER_TEXT,
        fontSize: 30,
        fontWeight: '700'
    },
    rightControll: {
        position: 'absolute',
        top: 40,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftControll: {
        flexDirection: 'row',
        position: 'absolute',
        top: 45,
        left: 30
    },
    logoutText: {
        paddingLeft: 5,
        color: style.HEADER_TEXT,
        fontWeight: 'bold'
    },
    picker: {
        // color: 'black',
        // backgroundColor: 'white',
        color: 'white',
        backgroundColor: 'black',
        minWidth: 80,
        marginLeft: 10
    }
});

export {
    styles
};