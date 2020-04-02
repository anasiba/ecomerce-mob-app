import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import Router from "./routing";
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native';
import { StatusBar, View } from 'react-native'
import theme from 'src/style/theme/default'

class Root extends PureComponent {
  render() {
    let storeDefaults = storeConfig();
    return (
      <Provider store={storeDefaults.store}>
        <PersistGate loading={null} persistor={storeDefaults.persistor}>
          <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>

            <StatusBar

              barStyle="light-content"
              //  backgroundColor="rgba(0, 0, 0, 0.251)"
              backgroundColor='blue'
              hidden={false}
              networkActivityIndicatorVisible={true}
              translucent={true}
            />
            <Router />
          </View>

        </PersistGate>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Root;