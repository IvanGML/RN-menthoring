import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
// import {Controll} from "../../components/Controll";
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
                return <Icon name="md-person-add" size={45} color="white"/>;
            case OFFICE:
                return <Icon name="md-person-add" size={45} color="white"/>;
            case TECH_TALK:
                return <Icon name="md-person-add" size={45} color="white"/>;
            case SOFT_SKILLS:
                return <Icon name="md-contacts" size={45} color="white"/>;
            case SELF_DEV:
                return <Icon name="md-person-add" size={45} color="white"/>;
            case SLEEP:
                return <Icon name="md-person-add" size={45} color="white"/>;
            default:
                return <Icon name="md-person-add" size={35} color="white"/>;
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
                        <Icon name="ios-arrow-back-outline" size={45} color="white"/>;
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