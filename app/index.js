import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { LogoPage } from './features/LogoPage';
import { MyApp } from './router/router';
import { store, persistor } from './redux/store/configureStore';
import { userInit } from './redux/actions/mainActions';

console.disableYellowBox = true;

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/* <PersistGate loading={null} persistor={persistor}> */}
                    <View style={{flex: 1}}>
                        <MyApp />
                    </View>
                {/* </PersistGate> */}
            </Provider>
        );
    }
}

export { Root };