import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default (props) => {
  return (
    <Container>
      <Footer>
        <FooterTab>
          <Button 
          vertical 
          active={props.selectedTab === "home"} 
          onPress={props.onSelectedTab}
          >
            <Icon name="home" />
            <Text style={styles.iconText}>ホーム</Text>
          </Button>
          <Button vertical active={props.selectedTab === "calendar"}>
            <Icon name="calendar" />
            <Text style={styles.iconText}>カレンダー</Text>
          </Button>
          <Button vertical active={props.selectedTab === "navigate"}>
            <Icon active name="navigate" />
            <Text>ナビ</Text>
          </Button>
          <Button vertical active={props.selectedTab === "plan"}>
            <Icon name="heart" />
            <Text>指南書</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}


const styles = StyleSheet.create({
  iconText: {
    fontSize: 10,
  },
});
