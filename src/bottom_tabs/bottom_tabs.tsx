import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Svg from '../assets/svg';
import { Size } from '../constants';
import MText from '../components/Text';
import HomeScreen from '../screens/home/HomeScreen';
import OrganizerProfile from '../screens/profile/OrganizerProfile';
import UserProfile from '../screens/profile/UserProfile';
import CreateEventScreen from '../screens/createEvent/CreateEventScreen';

const Tab = createBottomTabNavigator();

export function SampleScreens() {
  return (
    <View>
      <Text>bottom_tabs</Text>
    </View>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabel: '',
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 0,
          height: 68,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopStartRadius: 8,
          borderTopEndRadius: 8,
          width: Size.wWidth,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={<Svg.HomeActiveIcon />}
                text="Home"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ExploreTab"
        component={SampleScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={<Svg.ExploreIcon />}
                text="News"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="CreateTab"
        component={CreateEventScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={<Svg.PlueCircleActiveIcon />}
                text={`Blogs`}
                center={true}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={SampleScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={<Svg.BellIcon />}
                text="Chat"
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="AvatarTab"
        component={UserProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <BuildTabComponent
                image={<Svg.ProfileIcon />}
                text="Chat"
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

interface BuildTabComponent {
  image: any;
  text: string;
  focused: boolean;
  center?: boolean;
}

const BuildTabComponent = ({ image, text, focused, center }: BuildTabComponent) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: center ? -50 : 0 }}>
        {image}
      </View>
      {!center && <MText style={styles.text}>{text}</MText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Size.wWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
  }
});

export default BottomTabs;
