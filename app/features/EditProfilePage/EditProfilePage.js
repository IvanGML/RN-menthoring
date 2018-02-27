import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, Image, View, Text, TouchableOpacity, TouchableHighlight,} from 'react-native';
// import { ImagePicker } from 'expo';
import * as img from '../../images';
import {styles} from './styles';
import * as globalStyle from '../../styles/';
import {Header} from '../../components/Header';
import { CustomInput as Input} from '../../components/Input/';
import { DefaultButton as Button } from '../../components/Button';
import { setAge } from './actions';
import { id } from '../../firebase/';

class DumpEditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: this.props.name || '',
        surname: this.props.surname || '',
        age: this.props.age || '',
        company: this.props.company || '',
        image: this.props.image || null,
        id: '',
    };
  }

  returnState = state =>{ 
    return {
      playerTitle: this.props.title,
      playerName: state.name, 
      playerSurname: state.surname, 
      playerAge: state.age, 
      playerCompany: state.company,
      playerPicture: state.image
    }
  }
  componentDidMount() {

    this.setState({id})
  }
  saveChanges = () => {
    console.log(this.state.id);
    this.props.setAge(this.returnState(this.state), this.state.id);
    this.props.navigation.navigate('Profile');
  };
  discardChanges = () => this.props.navigation.navigate('Profile');
  handleName = name => this.setState({name});
  handleSurname = surname => this.setState({surname});
  handleCompany = company => this.setState({company});
  handleAge = age => this.setState({age});
  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //   });
  //   if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //   }
  // };

  render() {
    const {data, email, title, age, company} = this.props;
    const computedTitle = company === 'Not specified' ? 'any company' : company;
    const mainInfo = `${title} from ${computedTitle}.`;
    const isEditableSurname = !this.state.name ? true : false;
    const imageSource = this.state.image ?  { uri: this.state.image } : img.imgTemporary;
    return (
      <View>
          <Header navigation={this.props.navigation} 
                  title={'EDIT PROFILE PAGE'} 
                  navigateTo={'Playground'}/>
          <ScrollView style={styles.container}>
            <View style={styles.topSection}>
              <Text style={styles.label}>{'Profile picture: '}</Text>
              <TouchableHighlight
                style={{minHeight: 100}}
                activeOpacity={1}
                onPress={()=>{}}>
                <View>
                  <Text style={styles.touchMe}>{'TOUCH PICTURE TO PICK UP A NEW ONE FROM GALARY'}</Text>
                  <Image source={imageSource}
                    style={styles.image}/>
                </View>
              </TouchableHighlight>
            </View>


            <View style={styles.mainContent}>
              <View style={styles.personalInfo}>
                <Text style={styles.personalInfoHeader}>{'Personal information:'}</Text>
                <View style={styles.pesonalDetailsContainer}>
                  <Text style={styles.pesonalDetails}>{'Name:'}</Text>
                  <Input width={'50%'} placeholder="your Name" textHandler={this.handleName} value={this.state.name} />
                  <Text style={styles.pesonalDetails}>{'Surname:'}</Text>
                  <Input notEditable={isEditableSurname} width={'50%'} placeholder="your Surname" textHandler={this.handleSurname} value={this.state.surname} />
                  <Text style={styles.pesonalDetails}>{'Age:'}</Text>
                  <Input width={'50%'} placeholder="your age" textHandler={this.handleAge} value={this.state.age} />
                  <Text style={styles.pesonalDetails}>{'Company:'}</Text>
                  <Input width={'50%'} placeholder="your company" textHandler={this.handleCompany} value={this.state.company} />
                </View> 
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <Button method={this.discardChanges} title='Discard' color={globalStyle.DISCARD_BUTTON} />
              </View>
              <View style={styles.button}>
                <Button method={this.saveChanges} title='Save changes' color={globalStyle.EDIT_BUTTON} />
              </View>
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
      surname: state.userData.personalData.playerSurname,
      name: state.userData.personalData.playerName,
      // id: state.userInfo.userFetched.uid,
      title: state.userData.personalData.playerTitle,
      image: state.userData.personalData.playerPicture
  }
}

export const EditProfilePage = connect(
      mapStateToProps, 
      {setAge}
  )(DumpEditProfilePage);