import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, Image, View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import * as img from '../../images';
import {styles} from './styles';
import {Header} from '../../components/Header';
import { DefaultButton as Button } from '../../components/Button';

class DumpProfilePage extends Component {
    editProfile = () => this.props.navigation.navigate('EditProfile');
    render() {
        const {data, email, title, age, company, name, surname, image} = this.props;
        const computedTitle = company === '' ? 'any company' : company;
        const computedAge = age === '' ? 'not specified' : age;
        const computedName = name === '' 
                ? 'HERE WILL BE YOUR NAME' 
                : surname === '' ? name : name + ' ' + surname;
        const computedImage = image || img.imgTemporary; 
        const mainInfo = `${title} from ${computedTitle}.`;
        return (
            <View>
                <Header back 
                        menu 
                        navigation={this.props.navigation} 
                        title={'Profile'} 
                        navigateTo={'Playground'}/>
                <ScrollView style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Text style={styles.playerTitle}>{computedName}</Text>
                    <Image source={computedImage}
                           style={styles.image}/>
                  </View>
                  <View style={styles.mainContent}>
                    <Text style={styles.mainDisctiption}>{mainInfo}</Text>
                    <View style={styles.personalInfo}>
                      <Text style={styles.personalInfoHeader}>{'Personal information:'}</Text>
                      <View style={styles.pesonalDetailsContainer}>
                        <Text style={styles.pesonalDetails}>{'Age:'}</Text>
                        <Text style={[styles.pesonalDetails, styles.mainDisctiptionR]}>{computedAge}</Text>
                        <Text style={styles.pesonalDetails}>{'Email:'}</Text>
                        <Text style={[styles.pesonalDetails, styles.mainDisctiptionR]}>{email}</Text>
                      </View> 
                    </View>
                  </View>
                  <View style={{marginBottom: 150}}>
                    <Button method={this.editProfile} title='Edit' red/>
                  </View>

                </ScrollView>
            </View>
            
        );
    }
}

mapStateToProps = state => {
    return {
      age: state.userData.personalData.playerAge,
      company: state.userData.personalData.playerCompany,
      name: state.userData.personalData.playerName,
      surname: state.userData.personalData.playerSurname,
      title: state.userData.personalData.playerTitle,
      email: state.userInfo.userCredsSignIn.email,
      image: state.userData.personalData.playerPicture
    }
}

export const ProfilePage = connect(
        mapStateToProps, 
        null
    )(DumpProfilePage);