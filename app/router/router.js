import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { LogoPage, SignUpScreen } from '../features/LogoPage';
import { PlaygroundPage } from '../features/PlaygroundPage';
import { AboutPage } from '../features/AboutPage';
import { ActionBarPage } from '../features/ActionBarPage';
import { ProfilePage } from '../features/ProfilePage';
import { EditProfilePage } from '../features/EditProfilePage/';
import * as style from '../styles';

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
        screen: PlaygroundPage,
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