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
        imageContainer: {
            paddingTop: 30,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        },
        image: {
            // flexGrow: 2,
            height: 400,
            width: '100%',
        },
        playerTitle: {
            color: style.PLAYER_NAME,
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 15,
        },
        personalInfo: {
          
        },
        pesonalDetailsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingTop: 30,
          paddingBottom: 30,
        },
        pesonalDetails: {
          fontSize: 20,
          width: '50%',
          paddingBottom: 10,
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
          fontSize: 20,
          textAlign: 'center',
        }
    }
);

export {styles};