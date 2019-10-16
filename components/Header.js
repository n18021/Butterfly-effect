import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#2353a3",
    alignItems: "center",
    justifyContent: "center" 
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
  }
});
