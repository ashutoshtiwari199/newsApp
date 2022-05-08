import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import InshortTabs from './components/InshortTabs';

import Context from './API/Context';
function App() {
  return (
    <View style={{...styles.container, backgroundColor:"#242B2E"}}>
      <InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight
  },
});


export default  () => {
  return (
  <Context>
    <App />
  </Context>
  )
};