import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Header, Container } from 'native-base';
import default_styles from '../constants/default_styles';

export default () => {
  return (
    <Container>
      <Header style={default_styles.headerContainer}>
        <Text style={default_styles.headerText}>アルバムカレンダー</Text>
      </Header>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/images/calendar_sample.png")} style={styles.image} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
imageContainer: {
    flex: 5,
  },
});