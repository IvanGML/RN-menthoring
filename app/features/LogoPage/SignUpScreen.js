import React, {Component} from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { DefaultButton as Button } from '../../components/Button';
import { CustomInput as Input } from '../../components/Input';
import { styles } from './styles';
import * as img from '../../images';
import { firebaseApp } from '../../firebase'
import { userSignUp } from './actions';



export class DumpSignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeted: '',
            error: {
                message: ''
            }
        };
    }

    signup = () => {
        const { email, password, passwordRepeted } = this.state;
        if(password === passwordRepeted) {
            firebaseApp.auth().createUserWithEmailAndPassword(email,password)
                .then(user =>{
                    this.props.userSignUp(user, email, password);
                    this.props.navigation.navigate('Playground')
                })
                .catch(error => {
                    // console.log('error', error);
                    this.setState({error});
            });
        } else {
            this.setState({error: { message: 'PASSWORDS ISN\'T MUTCHED'}})
        }
    };
    handleLogin = email => this.setState({email});
    handlePassword = password => this.setState({password});
    handleRepetedPassword = passwordRepeted => this.setState({passwordRepeted});

    render() {
        return (
            <View style={styles.container}>
                <Image source={img.imgLogoEpamer} style={styles.image}/>
                <Input
                    placeholder="USER EMAIL"
                    textHandler={this.handleLogin}
                    value={this.state.email}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="TYPE YOUR PASSWORD"
                    textHandler={this.handlePassword}
                    value={this.state.password}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="REPEAT YOUR PASSWORD"
                    textHandler={this.handleRepetedPassword}
                    value={this.state.passwordRepeted}
                />
                <Button
                    title="SIGN UP"
                    method={this.signup}
                />
                <Text>{this.state.error.message}</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userInfo.userFetched,
    }
}

export const SignUpScreen = connect(
    mapStateToProps,
    {userSignUp},
    // {userInit: userInit} the same
  )(DumpSignUpScreen)