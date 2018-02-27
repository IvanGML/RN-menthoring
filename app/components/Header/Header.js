import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Dropdown } from '../../components/Dropdown/';
import { connect } from 'react-redux';
import { firebaseApp } from '../../firebase';
import { userLogout } from '../../features/LogoPage/actions';

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
                        onPress = {()=>navigation.navigate(navigateTo)}
                        style={styles.leftControll}>
                        <Text style={styles.logoutText}>
                          {navigateTo === 'Login page' ? '' : <Text>{'To playground'}</Text>}
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
                
                {menu &&
                    <Dropdown navigation={navigation} back={this.logout}/>
                }
            </View>
        );
    }
};

export const Header = connect(null, {userLogout})(DumpHeader);


