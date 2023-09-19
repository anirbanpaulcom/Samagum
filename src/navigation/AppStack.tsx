import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from '../bottom_tabs/bottom_tabs';
import EventDetailScreen from '../screens/eventDetail/EventDetailScreen';
import SearchScreen from '../screens/search/SearchScreen';
import GroupsScreen from '../screens/groups/GroupsScreen';
import EventsScreen from '../screens/events/EventsScreen';
import GroupDetailsScreen from '../screens/groupDetails/GroupDetailsScreen';
import OrganizerProfile from '../screens/profile/OrganizerProfile';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import NotificationsSettings from '../screens/settings/NotificationsSettings';
import LanguagesSettings from '../screens/settings/LanguagesSettings';
import PrivacyPolicyScreen from '../screens/settings/PrivacyPolicyScreen';
import SecurityScreen from '../screens/settings/SecurityScreen';
import ChangePasswordScreen from '../screens/auth/ChangePasswordScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName='SplashScreen'
        >
            <Stack.Screen
                name="Root"
                component={BottomTabs}
            />
            <Stack.Screen
                name="EventDetailScreen"
                component={EventDetailScreen}
            />
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
            />
            <Stack.Screen
                name="GroupsScreen"
                component={GroupsScreen}
            />
            <Stack.Screen
                name="EventsScreen"
                component={EventsScreen}
            />
            <Stack.Screen
                name="GroupDetailsScreen"
                component={GroupDetailsScreen}
            />
            <Stack.Screen
                name="OrganizerProfile"
                component={OrganizerProfile}
            />
            <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
            />
            <Stack.Screen
                name="NotificationsSettings"
                component={NotificationsSettings}
            />
            <Stack.Screen
                name="LanguagesSettings"
                component={LanguagesSettings}
            />
            <Stack.Screen
                name="PrivacyPolicyScreen"
                component={PrivacyPolicyScreen}
            />
            <Stack.Screen
                name="SecurityScreen"
                component={SecurityScreen}
            />
            <Stack.Screen
                name="ChangePasswordScreen"
                component={ChangePasswordScreen}
            />
        </Stack.Navigator>
    );
}

export default AppStack;

