import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, Header, } from 'native-base';
import default_styles from '../constants/default_styles';

export default () => {
  return (
    <Container>
      <Header style={default_styles.headerContainer}>
        <Text style={default_styles.headerText}>ベストカップル</Text>
      </Header>
      <View style={styles.background}>
          <Text>ベストカップルの画面</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
 background: {
    flex: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});
