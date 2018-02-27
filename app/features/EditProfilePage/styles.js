import {StyleSheet} from 'react-native';
import * as style from '../../styles';

const styles = StyleSheet.create({
        container: {
            backgroundColor: style.MAIN_BACKGROUND_COLOR,
        },
        mainContent: {
            paddingLeft: style.PADDING,
            paddingRight: style.PADDING,
        },
        topSection: {
          paddingTop: 30,
          paddingLeft: style.PADDING,
          paddingRight: style.PADDING,
          position: 'relative',
        },
        label: {
          paddingBottom: 30,
          fontSize: 24,
          color: style.MAIN_TEXT
        },
        image: {
            height: 400,
            width: '100%',
        },
        buttonsContainer: {
          marginBottom: 150, 
          paddingLeft: style.PADDING,
          paddingRight: style.PADDING,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        button: {
          width: '45%',

        },
        touchMe: {
          fontSize: 30,
          color: 'gray',
          top: '45%',
          textAlign: 'center',
          fontWeight: 'bold',
          zIndex: 1,
          position: 'absolute'
        },
        playerTitle: {
            color: style.PLAYER_NAME,
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 15,
        },
        pesonalDetailsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 30,
          alignItems: 'center',
          paddingBottom: 30,
        },
        pesonalDetails: {
          fontSize: 20,
          width: '50%',
        },
        mainDisctiptionR: {
          textAlign: 'right',
        },
        mainDisctiption: {
          paddingTop: 30,
          paddingBottom: 30,
          textAlign: 'center',
          fontSize: 24,
          color: style.MAIN_TEXT
        },
        personalInfoHeader: {
          fontSize: 24,
          color: style.MAIN_TEXT,
          paddingTop: 20,
        }
    }
);

export {styles};