import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Button, Image, StyleSheet } from "react-native";

import { LogoPage, SignUpScreen } from '../features/LogoPage';
import { PlaygroundPage } from '../features/PlaygroundPage';
import { AboutPage } from '../features/AboutPage';
import { ActionBarPage } from '../features/ActionBarPage';
import { ProfilePage } from '../features/ProfilePage';
import { EditProfilePage } from '../features/EditProfilePage/';
import * as style from '../styles';
import { connect } from 'react-redux';
import { userLogout } from '../features/LogoPage/actions';
import { firebaseApp } from '../firebase';


class DumpLogout extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Logout',
  };
  componentDidMount()  {
    this.props.userLogout();
    firebaseApp.auth().signOut();
    this.props.navigation.navigate('Login page')
  }

  render() {
    return (
      <Button
        onPress={()=>{}}
        title="Logout"
      />
    );
  }
}

const Logout = connect(null, { userLogout })(DumpLogout);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


const Drawer = DrawerNavigator({
 Playground: {
   screen: PlaygroundPage,
 },
 Profile: {
   screen: ProfilePage,
 },
 About: {
   screen: AboutPage,
 },
 Logout: {
   screen: Logout,
 }
})

const Logo = TabNavigator({
   Signin: {
       screen: LogoPage,
   },
   Signup: {
       screen: SignUpScreen,
   },
}, {
   tabBarPosition: 'bottom',
   header: null,
   animationEnabled: true,
   tabBarOptions: {
       style: {
           backgroundColor: style.TABS_BACKGROUND,
         },
       activeTintColor: style.TABS_TEXT,
   },
});

export const MyApp = StackNavigator({
   'Login page': {
       screen: Logo,
       navigationOptions: {
           animationEnabled: true,
           title: 'Login page',
           header: null,
           cardStyle: {
               backgroundColor: 'white'
           }
       }
   },
   Playground: {
       screen: Drawer,
       navigationOptions: {
           title: 'Playground page',
           header: null
       }
   },
   About: {
       screen: AboutPage,
       navigationOptions: {
           title: 'About',
           header: null
       }
   },
   Profile: {
       screen: ProfilePage,
       navigationOptions: {
           title: 'About',
           header: null
       }
   },
   EditProfile: {
       screen: EditProfilePage,
       navigationOptions: {
           title: 'EditProfile',
           header: null
       }
   },
   'Action bar': {
       screen: ActionBarPage,
   }
});
