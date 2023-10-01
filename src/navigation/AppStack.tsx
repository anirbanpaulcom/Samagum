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
import SocialLinksScreen from '../screens/profile/SocialLinksScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AttendingEventsScreen from '../screens/EventsScreens/Attending';
import MyWatchListScreen from '../screens/EventsScreens/MyWatchList';
import UpcomingEventsAll from '../screens/EventsScreens/UpcomingEventsAll';
import FeaturedEventsScreen from '../screens/EventsScreens/FeaturedEvents';
import NearbyEventsScreen from '../screens/EventsScreens/NearbyEvents';
import EventsFromJoinedGroupScreen from '../screens/EventsScreens/EventsFromJoinedGroups';
import ImOrganizingScreen from '../screens/EventsScreens/I\'mOrganizing';
import GroupIOwnScreen from '../screens/groups/GroupIOwn';
import MostVibrantGroupsScreen from '../screens/groups/MostVibrantGroups';
import JoinedGroupScreen from '../screens/groups/JoinedGroup';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { VerifyOtpScreen } from '../screens/auth';
import ForgotPasswordScreen from '../screens/auth/ForgotPassword';
import WelcomeScreen from '../screens/welcome/WelcomeScreen';
import CategoriesScreen from '../screens/categories/CaegoriesScreen';
import InterestsScreen from '../screens/interests/InterestsScreen';
import CreateEventScreen from '../screens/createEvent/CreateEventScreen';
import CreateGroupScreen from '../screens/createGroup/CreateGroupScreen';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import UpgraderProScreen from '../screens/createGroup/upgradePro';
import MyEventsScreen from '../screens/EventsScreens/MyEvents';

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
                name="LoginScreen"
                component={LoginScreen}
            />

    <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
      />

      <Stack.Screen
        name="VerifyOtpScreen"
        component={VerifyOtpScreen}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      />

      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />

      <Stack.Screen
        name="InterestsScreen"
        component={InterestsScreen}
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
                name="AttendingEventsScreen"
                component={AttendingEventsScreen}
            />
            <Stack.Screen
                name="UpcomingEventsAll"
                component={UpcomingEventsAll}
            />
            <Stack.Screen
                name="FeaturedEventsScreen"
                component={FeaturedEventsScreen}
            />
             <Stack.Screen
                name="ImOrganizingScreen"
                component={ImOrganizingScreen}
            />
            <Stack.Screen
                name="EventsFromJoinedGroupScreen"
                component={EventsFromJoinedGroupScreen}
            />
            <Stack.Screen
                name="MyWatchListScreen"
                component={MyWatchListScreen}
            />
            <Stack.Screen
                name="GroupIOwnScreen"
                component={GroupIOwnScreen}
            />
            <Stack.Screen
                name="MostVibrantGroupsScreen"
                component={MostVibrantGroupsScreen}
            />
            <Stack.Screen
                name="JoinedGroupScreen"
                component={JoinedGroupScreen}
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
            <Stack.Screen
            name="SocialLinksScreen"
            component={SocialLinksScreen}
            />
            <Stack.Screen
            name="CreateEventScreen"
            component={CreateEventScreen}
            />
            <Stack.Screen
            name="CreateGroupScreen"
            component={CreateGroupScreen}
            />

        <Stack.Screen
            name="UpgraderProScreen"
            component={UpgraderProScreen}
            />
              <Stack.Screen
            name="NearbyEventsScreen"
            component={NearbyEventsScreen}
            />
            <Stack.Screen
            name="MyEventsScreen"
            component={MyEventsScreen}
            />
        </Stack.Navigator>
    );
}

export default AppStack;

