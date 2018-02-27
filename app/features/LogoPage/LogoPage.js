import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { DefaultButton as Button } from '../../components/Button';
import { CustomInput as Input } from '../../components/Input';
import { styles } from './styles';
import * as img from '../../images';
import { firebaseApp } from '../../firebase';
import { connect } from 'react-redux';
import { userInit, switchCheckBox } from './actions';


class DumpLogoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email || '',
            password: this.props.password || '',
            error: {
                message: ''
            }
        };
    }
    componentDidMount() {
        /*navigate to Playground page if user is loggined on*/
        let { user } = this.props;
        if (user) {this.props.navigation.navigate('Playground')};
    }
    loging = () => {
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .then(user =>{
                this.props.userInit(user, email, password)
                this.props.navigation.navigate('Playground')
            })
            .catch(error => {
                this.setState({error})
            });
    };
    switchCheckBox = () => {
        this.props.switchCheckBox();
    }
    handleLogin = email => this.setState({email});
    handlePassword = password => this.setState({password});

    render() {
        let inputBG = (this.state.email === this.props.email 
                        && this.state.email !== ''
                        && this.props.checked)
                    ? {backgroundColor: '#faffbd'} 
                    : {backgroundColor: 'white'};
        // console.log(inputBG);
        return (
            <View style={styles.container}>
                <Image source={img.imgLogoEpamer} style={styles.image}/>
                <Input
                    bg={inputBG}
                    placeholder="Username"
                    textHandler={this.handleLogin}
                    value={this.state.email}
                />
                <Input
                    bg={inputBG}
                    secureTextEntry={true}
                    placeholder="********"
                    textHandler={this.handlePassword}
                    value={this.state.password}
                />
                <View style={styles.credentialWrapper}>
                    <Text style={styles.credentialText}>Do you want to save credentials?</Text>
                    {/* <CheckBox 
                        style={styles.checkBox}
                        onValueChange={this.switchCheckBox} 
                        value={this.props.checked}/> */}
                </View>
                <Button
                    title="SIGN IN"
                    method={this.loging}
                />
                <Text>{this.state.error.message}</Text>
            </View>
        );
    }
}

    /*const mapDispatchToProps = dispatch => ({
        userInit(user){
            dispatch(userInit(user))
        }
    });
    the same is next variants inside "connect" function
    {userInit}
    {userInit: userInit}*/

const mapStateToProps = state => {
    return {
        user: state.userInfo.userFetched,
        checked: state.userInfo.saveCreds,
        email: state.userInfo.userCredsSignIn.email,
        password: state.userInfo.userCredsSignIn.password
    }
}

export const LogoPage = connect(
    mapStateToProps,
    {userInit, switchCheckBox},
    // {userInit: userInit} the same
  )(DumpLogoPage)