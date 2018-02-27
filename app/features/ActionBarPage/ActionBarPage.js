import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {styles} from './styles';
import {firebaseApp} from '../../firebase';
import {goToOffice, 
        goToHome, 
        goToTechTalk, 
        improveSoftSkill, 
        makeSelfDev, 
        goToSleep, 
        HOME, 
        OFFICE, 
        TECH_TALK, 
        SOFT_SKILLS, 
        SELF_DEV, 
        SLEEP  
} from './actions';

const Trigger = props => {
    let actionIcon = () => {
        switch (props.title) {
            case HOME:
                return <Icon name="ios-home" size={40} color="white" />;
            case OFFICE:
                return <Icon name="md-briefcase" size={40} color="white" />;
            case TECH_TALK:
                return <Icon name="ios-microphone" size={40} color="white" />;
            case SOFT_SKILLS:
                return <Icon name="ios-people" size={40} color="white" />;
            case SELF_DEV:
                return <Icon name="ios-build-outline" size={40} color="white" />;
            case SLEEP:
                return <Icon name="ios-refresh-circle" size={40} color="white" />;
            default:
                return <Icon name="ios-settings" size={40} color="white" />;
        }
    }
    let currentAction = () => {
        props.closeActionBar(props.title, props.data, props.id);
    }
    return (<View style={styles.actionButtonContainer}>
                <TouchableOpacity
                    progress={props.progress}
                    title={props.title}
                    key={props.id}
                    id={props.id}
                    activeOpacity={0.8}
                    onPress={currentAction}
                    style={styles.actionButton}>
                    {actionIcon()}
                    <Text style={{fontSize: 20, color: 'white'}}>
                        {props.title}
                    </Text>
                </TouchableOpacity>
            </View>)};

class DumpActionBarPage extends Component {
    actionBarsRender = () => {
        return (
            this.props.typesOfAction.map((item,index)=> <Trigger 
                data={this.props.data}
                title={item}
                key={index}
                id={this.props.id}
                increaseSkill={this.props}
                closeActionBar={this.props.switch}
                startAction={this.props.startAction}
            />)
        );
    }
    render() {
        const actionBars = this.actionBarsRender();
        return (
            <ScrollView style={styles.actionBarContainer}>
                
                <View style={styles.actionBarTitleContainer}>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>
                            <Text style={styles.userNameDecoration}>&#60;</Text>
                                {`${this.props.name} ${this.props.surname}`}
                            <Text style={styles.userNameDecoration}>&#62;</Text>
                        </Text>
                    </View>
                    <View style={styles.userTitleContainer}>
                        <Text style={styles.userTitle}>
                            {this.props.title}
                        </Text>
                    </View>
                </View>
                <View style={styles.actionBarControllsContainer}>
                    {actionBars}
                </View>
                <TouchableOpacity style={styles.actionBarCloseButton}
                      onPress={this.props.switch}>
                    <View style={styles.closeButtonContainer}>
                      <Text>
                        <Icon name="ios-arrow-back" size={30} color="white" />
                      </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}


mapStateToProps = state => {
    return {
        surname: state.userData.personalData.playerSurname,
        name: state.userData.personalData.playerName,
        data: state.userData.data,
        typesOfAction: state.userData.typesOfAction,
        id: state.userInfo.userFetched.uid,
        title: state.userData.personalData.playerTitle,
    }
}

export const ActionBarPage = connect(
        mapStateToProps, 
        {goToOffice, 
         goToHome, 
         goToTechTalk, 
         improveSoftSkill, 
         makeSelfDev, 
         goToSleep}
    )(DumpActionBarPage);