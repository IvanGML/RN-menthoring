import { StyleSheet } from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: style.MAIN_BACKGROUND_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: style.PADDING,
        paddingRight: style.PADDING,
    },
    image: {
        marginBottom: '5%',
        maxWidth: '90%',
        resizeMode: 'contain'
    },
    credentialWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20,
    },
    credentialText: {
        fontSize: 20,
        color: 'gray'
    },
    checkBox: {
        height: 30
    }
});

export { styles };