import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Dropdown } from '../../components/Dropdown/';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import { userLogout } from '../../features/LogoPage/actions';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class DumpHeader extends Component {
    logout = () => {
      this.props.userLogout();
      firebaseApp.auth().signOut()
    };
    render() {
        const { back, navigation, navigateTo, title, menu } = this.props;
        return(
            <View style={styles.header}>
                {back &&
                    <TouchableOpacity
                        onPress = {()=>this.props.navigation.navigate('DrawerOpen')}
                        style={styles.leftControll}>
                        <Text style={styles.logoutText}>
                          <Text>
                            <Icon name="ios-menu" size={40} color="white" />
                          </Text>
                        </Text>
                    </TouchableOpacity>
                }
                <View style={styles.title}>
                    <Text style={styles.normalText}>
                        <Text style={styles.decoratedText}>&#60;</Text>
                            {title.toUpperCase()}
                        <Text style={styles.decoratedText}>&#62;</Text>
                    </Text>
                </View>
            </View>
        );
    }
};

export const Header = connect(null, {userLogout})(DumpHeader);


