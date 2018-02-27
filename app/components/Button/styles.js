import { StyleSheet } from 'react-native';
import * as generalStyles from '../../styles';

const styles = StyleSheet.create({
    buttonContainer: {
        // paddingTop: "5%",
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
        paddingBottom: '5%',
        backgroundColor: generalStyles.BUTTON_LOGO,
    },
    buttonText: {
        fontSize: 35,
        fontWeight: '900',
        // fontFamily: 'sans-serif-condensed',
        color: generalStyles.BUTTON_TEXT_LIGHT
    }
});

export { styles };