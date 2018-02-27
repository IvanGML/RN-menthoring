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
            marginTop: 30,
        },
        image: {
            height: 300,
            width: '100%',
        },
        playerTitle: {
            color: style.PLAYER_TITLE,
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 15,
        },
        touchMe: {
          fontSize: 30,
          color: 'gray',
          bottom: '10%',
          textAlign: 'center',
          fontWeight: 'bold',
          zIndex: 1,
          position: 'absolute'
        },
    }
);

export {styles};