import React, {Component} from 'react';
import { View, 
    Text, 
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { styles } from './styles';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

class ProgressBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }
    actionIcon = title => {
        switch (title) {
            case 'Personal':
                return <Icon name="ios-home" size={30} color="gray" />;
            case 'Project Activity':
                return <Icon name="ios-build-outline" size={30} color="gray" />;
            case 'Soft Skills':
                return <Icon name="ios-people" size={30} color="gray" />;
            case 'Hard Skills':
                return <Icon name="md-briefcase" size={30} color="gray" />;
            default:
                return <Icon name="ios-people" size={30} color="gray" />;
        }
    }
    click = () => {
        var CustomLayoutSpring = {
            duration: 1500,
            create: {
              type: LayoutAnimation.Types.spring,
              property: LayoutAnimation.Properties.scaleXY,
              springDamping: 0.7,
            },
            update: {
              type: LayoutAnimation.Types.spring,
              springDamping: 0.7,
            },
          };
        LayoutAnimation.configureNext(CustomLayoutSpring);
        this.setState({number: this.state.number+10})
    }
    componentWillReceiveProps() {
        var CustomLayoutLinear = {
            duration: 500,
            create: {
              type: LayoutAnimation.Types.linear,
              property: LayoutAnimation.Properties.scaleXY,
              springDamping: 1,
            },
            update: {
              type: LayoutAnimation.Types.linear,
              springDamping: 1,
            },
          };
        LayoutAnimation.configureNext(CustomLayoutLinear);
    }
    render() {
        let computedWidth = this.props.progress + this.state.number + '%';
        return(
            <View>
                <View style={styles.headerContainer}>
                    {this.actionIcon(this.props.title)}
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                {/* <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.click}> */}
                    <View style={styles.progressBar}>
                        <View style={[styles.fullness, {width: computedWidth}]}><Text> </Text></View>
                    </View>
                {/* </TouchableOpacity> */}
            </View>
        );
    }
}

export { ProgressBar };

