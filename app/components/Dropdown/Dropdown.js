import React, {Component} from 'react'; 
import { View, Picker, TouchableOpacity, Text } from 'react-native'; 
import { styles } from './styles';  

class Dropdown extends Component { 
// constructor(props){ 
// super(props); 
// this.state = { 
// dropdownOpened: false 
// } 
// } 
// switchDD = () => this.setState({dropdownOpened: !this.state.dropdownOpened}); 
render() { 
  const { navigation, back } = this.props; 
  // const icon = this.state.dropdownOpened 
  // ? <Ionicons name="ios-arrow-up" size={35} color="white" /> 
  // : <Ionicons name="ios-arrow-down" size={35} color="white" /> 
    return( 
      <View 
        style={styles.rightControll}> 
        <Text>Menu</Text>
        <Picker 
          style={styles.picker} 
          selectedValue={'Menu'} 
          mode={'dropdown'} 
          onValueChange={(itemValue, itemIndex) =>{ 
          if (itemValue === 'Login page') { back() }; 
          return navigation.navigate(itemValue)} 
          }> 
          <Picker.Item label="Menu" value="Menu" /> 
          <Picker.Item label="Playground" value="Playground" /> 
          <Picker.Item label="Personal profile page" value="Profile" /> 
          <Picker.Item label="About" value="About" /> 
          <Picker.Item label="Logout" value="Login page" /> 
        </Picker> 
      </View> 
    ); 
  } 
}; 

export { Dropdown };