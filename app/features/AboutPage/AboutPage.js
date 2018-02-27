import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Header} from '../../components/Header';
import {styles} from './styles';
import { content } from './constants';
import { connect } from 'react-redux';

export class AboutPage extends Component {
    render() {
        return (
            <View>
                <Header back title={'About'} navigation={this.props.navigation} navigateTo={'Playground'} menu/>
                <ScrollView>
                    <View style={styles.mainContent}>
                        <Text style={styles.text}>
                          {content}
                        </Text>
                        <Text style={styles.text}>
                          {content}
                        </Text>
                        <Text style={styles.text}>
                          {content}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}