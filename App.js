import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Login from './src/App';
import Home from './screens/Home';
import Calendar from './screens/Calendar';
import Navigate from './screens/Navigate';
import Plan from './screens/Plan';
import BestCouples from './screens/BestCouples';

export default () => {
  const [screen, setScreen] = useState(<Login />);
  const [currentTab, setCurrentTab] = useState();
  const switchTabHandler = (selectedTab) => {
    switch (selectedTab) {
      case "home":
        setCurrentTab("home");
        setScreen(<Home />);
        break;
      case "calendar":
        setCurrentTab("calendar");
        setScreen(<Calendar />);
        break;
      case "bestCouples":
        setCurrentTab("bestCouples");
        setScreen(<BestCouples />);
        break;
      case "navigate":
        setCurrentTab("navigate");
        setScreen(<Navigate />);
        break;
      case "plan":
        setCurrentTab("plan");
        setScreen(<Plan />);
        break;
    }
  }
  return (
    <Container>
      {screen}
      <Footer>
        <FooterTab>
          <Button
            vertical
            active={currentTab === "home"}
            onPress={() => switchTabHandler("home")}
          >
            <Icon name="home" />
            <Text style={styles.iconText}>ホーム</Text>
          </Button>
          <Button
            vertical
            active={currentTab === "calendar"}
            onPress={() => switchTabHandler("calendar")}
          >
            <Icon name="calendar" />
            <Text style={styles.iconText}>アルバム</Text>
          </Button>
          <Button
            vertical
            active={currentTab === "bestCouples"}
            onPress={() => switchTabHandler("bestCouples")}
          >
            <Icon name="trophy" />
            <Text style={styles.iconText}>ベスト</Text>
          </Button>
          <Button
            vertical
            active={currentTab === "navigate"}
            onPress={() => switchTabHandler("navigate")}
          >
            <Icon active name="navigate" />
            <Text style={styles.iconText}>ナビ</Text>
          </Button>
          <Button
            vertical
            active={currentTab === "plan"}
            onPress={() => switchTabHandler("plan")}
          >
            <Icon name="heart" />
            <Text style={styles.iconText}>指南書</Text>
          </Button>
         
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  iconText: {
    fontSize: 10,
  },
});
