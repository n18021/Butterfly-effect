import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, } from 'native-base';
import default_styles from '../constants/default_styles';

export default () => {
  return (
    <Container>
      <Header style={default_styles.headerContainer}>
        <Text style={default_styles.headerText}>シナンショ</Text>
      </Header>
      <View style={styles.background}>
        <Image source={require("../assets/images/plan_sample.jpg")} style={styles.image} />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
 background: {
    flex: 5,
  },
  image: {
    width: 400,
    height: 600,
  },
});
