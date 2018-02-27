import { StyleSheet } from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
    progressBarContainer: {
        marginTop: 10
    },
    title: {
        fontSize: 20,
        paddingLeft: 20,
        color: style.PROGRESSBAR_PENDING
    },
    progressBar: {
        backgroundColor: style.PROGRESSBAR_PENDING,
        width: '100%',
        height: 20,
        marginTop: 10,
        borderRadius: 5,
    },
    fullness: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: style.PROGRESSBAR_SUCCESS,
        height: '101%'
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        marginLeft: 10
        // width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    }
});

export { styles };