import {StyleSheet} from 'react-native';
import * as style from '../../styles';

const dimension = 80;
const borderRadius = dimension/2;

const styles = StyleSheet.create({
    actionBarContainer: {
        backgroundColor: style.ACTIONBAR_BACK,
        flex: 1
    },
    actionBarCloseButton: {
        height: 170
    },
    closeButtonContainer: {
        margin: style.MARGIN,
        alignSelf: 'center',
        width: dimension,
        height: dimension,
        borderColor: style.ACTIONBAR_CONTROLL,
        borderWidth: 5,
        borderRadius: borderRadius,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userNameDecoration: {
        color: style.ACTIONBAR_TITILE_BRAKETS
    },
    userName: {
        fontWeight: 'bold',
        color: style.ACTIONBAR_TITILE,
        fontSize: 35,
    },
    userNameContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionBarTitleContainer: {
        marginTop: 40,
        marginBottom: 40
    },
    userTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30
    },
    userTitle: {
        fontSize: 30,
        color: style.ACTIONBAR_TITILE_BRAKETS
    },
    actionBarControllsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'

    },
    actionButton: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    actionButtonContainer: {
        width: '50%',
        paddingTop: 40,
        paddingBottom: 40,
    }
});

export {styles};