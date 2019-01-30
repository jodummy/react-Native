import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import styles from "./ComponentName/styles";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.child}>child one</Text>
        <Text style={styles.child}>child two</Text>
        <Text style={styles.child}>child three</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#F5FCFF',
    borderColor: '#0099AA',
    borderWidth: 5,
    marginTop: 30
  },
  child: {
    backgroundColor: '#AA0099',
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24
  }

})
