import {StyleSheet} from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
        container: {
            backgroundColor: style.MAIN_BACKGROUND_COLOR,
            paddingLeft: style.PADDING,
            paddingRight: style.PADDING,
        },
        mainContent: {
            marginBottom: 130,
        },
        imageContainer: {
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            // height: 400,
        },
        image: {
            // flexGrow: 2,
            height: 300,
            width: 300,
        },
        playerTitle: {
            color: style.PLAYER_TITLE,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 15,
        },
        touchMe: {
            fontSize: 30,
            color: 'red',
            top: '45%',
            left: '23%',
            fontWeight: 'bold',
            // justifyContent: 'center',
            // alignItems: 'center',
            zIndex: 1,
            position: 'absolute'
        }
    }
);

export {styles};