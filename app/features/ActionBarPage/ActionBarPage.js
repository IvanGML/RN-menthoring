import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
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
                return null;
            case OFFICE:
                return null;
            case TECH_TALK:
                return null;
            case SOFT_SKILLS:
                return null;
            case SELF_DEV:
                return null;
            case SLEEP:
                return null;
            default:
                return null;
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
                <TouchableOpacity style={styles.actionBarCloseButton}
                      onPress={this.props.switch}>
                    <View style={styles.closeButtonContainer}>
                      <Text>
                        {'Quite'};
                      </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.actionBarTitleContainer}>
                    <View style={styles.userNameContainer}>
                        <Text style={styles.userName}>
                            <Text style={styles.userNameDecoration}>&#60;</Text>
                                Username
                            <Text style={styles.userNameDecoration}>&#62;</Text>
                        </Text>
                    </View>
                    <View style={styles.userTitleContainer}>
                        <Text style={styles.userTitle}>
                            Junior Softwere Engineer
                        </Text>
                    </View>
                </View>
                <View style={styles.actionBarControllsContainer}>
                    {actionBars}
                </View>
            </ScrollView>
        );
    }
}


mapStateToProps = state => {
    return {
        data: state.userData.data,
        typesOfAction: state.userData.typesOfAction,
        id: state.userInfo.userFetched.uid
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