import * as React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {NavigationContainer, useScrollToTop} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Feed() {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (
    <ScrollView ref={ref}>
      <Image
        source={{
          uri:
            'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4128770553,3892991454&fm=26&gp=0.jpg',
        }}
        style={{width: 400, height: 400}}
        key="1"
      />
      <Image
        source={{
          uri:
            'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4128770553,3892991454&fm=26&gp=0.jpg',
        }}
        style={{width: 400, height: 400}}
        key="2"
      />
      <Image
        source={{
          uri:
            'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4128770553,3892991454&fm=26&gp=0.jpg',
        }}
        style={{width: 400, height: 400}}
        key="3"
      />
      <Image
        source={{
          uri:
            'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4128770553,3892991454&fm=26&gp=0.jpg',
        }}
        style={{width: 400, height: 400}}
        key="4"
      />
    </ScrollView>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
