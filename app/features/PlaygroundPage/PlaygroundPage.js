import React, {Component} from 'react';
import { ScrollView, 
         View, 
         Text,
         Image, 
         Modal,
         TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';

import { ActionBarPage } from "../ActionBarPage/ActionBarPage";
import {Header} from '../../components/Header';
import {ProgressBar} from '../../components/ProgressBar';
import {styles} from './styles';
import * as img from '../../images';
import { DefaultButton as Button } from '../../components/Button';
import {Spinner} from '../../components/Spinner';
import { fetchData } from './actions';
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
} from '../ActionBarPage/actions';

class DumpPlaygroundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progressBarData: [],
            opened: false,
            loading: true,
            image: !!this.props.image ? { uri: this.props.image } : img.imgTemporary || null
        }
    }
    componentDidMount() {
      this.props.fetchData();
      // let image = this.props.image ?  : img.imgTemporary;
      // this.setState({image})
      /*navigate to logo page if user is not loggined on*/
        // let { user } = this.props;
        // if (!user) this.props.navigation.navigate('Login page');
    }
    
    progressBarRender = () => {
      if(this.props.data) {
        return (
          this.props.data.map(
            item => <ProgressBar progress={item.progress}
                                 onPress={this.increaseSkill}
                                 title={item.title}
                                 key={item.id}
                                 id={item.id}
                                 elem={item.elem}/>)
        );
      }
    };
    removeSkill = id => this.itemsRef.child(id).remove();
    switchModal = (title, data, id) => {
      this.setState({opened: !this.state.opened})
      switch (title) {
        case HOME:
            return this.props.goToHome(data, id);
        case OFFICE:
            return this.props.goToOffice(data, id);
        case TECH_TALK:
            return this.props.goToTechTalk(data, id);
        case SOFT_SKILLS:
            return this.props.improveSoftSkill(data, id);
        case SELF_DEV:
            return this.props.makeSelfDev(data, id);
        case SLEEP:
            return this.props.goToSleep();
        default:
            return null;
      }
    };
    startAction = (action, data, id) => {
        setTimeout(action, 300);
    }
    showSpinner() {
        const progressBarData = this.progressBarRender();
        return(
            this.props.isLoading
            ? <Spinner /> 
            : <ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Text style={styles.playerTitle}>{this.props.playerTitle}</Text>
                    <TouchableHighlight
                        activeOpacity={1}
                        onPress={this.switchModal}>
                        <View>
                            <Text style={styles.touchMe}>{'TOUCH ME!!!'}</Text>
                            <Image source={this.state.image}
                                style={styles.image}/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.mainContent}>
                    {progressBarData}
                </View>
            </ScrollView>
        )
    }
    
    render() {
        const showSpinner = this.showSpinner();
        return (
            <View>
                <Modal visible={!!this.state.opened} 
                       transparent={true} 
                       onRequestClose={()=>{}}
                       animationType={'fade'}>
                    <ActionBarPage  
                        switch={this.switchModal} 
                        startAction={this.startAction}
                        />
                </Modal>
                <Header menu 
                        navigation={this.props.navigation} 
                        title={'Epamer'} 
                        navigateTo={'Login page'}/>
                {showSpinner}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.userFetched,
        data: state.userData.data,
        isLoading: state.userData.isLoading,
        playerTitle: state.userData.playerTitle,
        image: state.userData.personalData.playerPicture
    }
}
export const PlaygroundPage = connect(
    mapStateToProps,
    {fetchData,
    goToOffice, 
    goToHome, 
    goToTechTalk, 
    improveSoftSkill, 
    makeSelfDev, 
    goToSleep},
  )(DumpPlaygroundPage)